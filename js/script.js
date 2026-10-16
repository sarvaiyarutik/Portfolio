/**
 * Portfolio interactions:
 * - dynamic copyright year
 * - sticky header state
 * - active nav link highlighting
 * - mobile menu close on link click
 * - graceful resume PDF availability check
 */

(function () {
  "use strict";

  var RESUME_PDF_PATH = "assets/resume/rutik-sarvaiya-resume.pdf";

  /* ------------------------------------------------------------------ */
  /* Copyright year                                                     */
  /* ------------------------------------------------------------------ */

  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------ */
  /* Header scrolled state                                              */
  /* ------------------------------------------------------------------ */

  var header = document.querySelector(".site-header");

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* ------------------------------------------------------------------ */
  /* Active nav link on scroll                                          */
  /* ------------------------------------------------------------------ */

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll("#primaryNav .nav-link[href^='#']")
  );

  var sectionMap = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  function setActiveLink(activeEntry) {
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link === activeEntry.link);
    });
  }

  if ("IntersectionObserver" in window && sectionMap.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var match = sectionMap.find(function (item) {
              return item.section === entry.target;
            });
            if (match) setActiveLink(match);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
      }
    );

    sectionMap.forEach(function (item) {
      observer.observe(item.section);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Mobile menu: close after choosing a link                           */
  /* ------------------------------------------------------------------ */

  var navCollapseEl = document.getElementById("primaryNav");

  if (navCollapseEl && typeof bootstrap !== "undefined") {
    var navCollapse = new bootstrap.Collapse(navCollapseEl, { toggle: false });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navCollapseEl.classList.contains("show")) {
          navCollapse.hide();
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Resume PDF availability                                            */
  /*                                                                     */
  /* To publish your resume, add the PDF at:                             */
  /*   assets/resume/rutik-sarvaiya-resume.pdf                           */
  /* The buttons below appear automatically once the file is in place.   */
  /* ------------------------------------------------------------------ */

  var resumeActions = document.getElementById("resume-actions");
  var resumeNote = document.getElementById("resume-note");

  function showResumeAvailable() {
    if (resumeActions) resumeActions.hidden = false;
    if (resumeNote) resumeNote.hidden = true;
  }

  function showResumeUnavailable() {
    if (resumeActions) resumeActions.hidden = true;
    if (resumeNote) {
      resumeNote.hidden = false;
      resumeNote.textContent =
        "The resume PDF is being prepared and will be available here shortly.";
    }
  }

  function checkResumeAvailability() {
    fetch(RESUME_PDF_PATH, { method: "HEAD" })
      .then(function (response) {
        if (response.ok) {
          showResumeAvailable();
        } else {
          showResumeUnavailable();
        }
      })
      .catch(function () {
        // File missing, blocked by CORS, or opened via file:// protocol.
        showResumeUnavailable();
      });
  }

  checkResumeAvailability();
})();
