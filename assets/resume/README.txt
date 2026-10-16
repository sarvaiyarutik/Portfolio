Resume PDF location
===================

Place your resume PDF in this folder using exactly this file name:

    rutik-sarvaiya-resume.pdf

Full path:

    assets/resume/rutik-sarvaiya-resume.pdf

What happens after you add it
-----------------------------
1. Serve the site with a local web server (for example Live Server in VS Code).
2. The Resume section automatically detects the PDF.
3. The "Download PDF" and "View in Browser" buttons appear for visitors.

If you rename the file
----------------------
Update these two places in index.html:
  - id="resume-download"  (href attribute)
  - id="resume-view"      (href attribute)

And update RESUME_PDF_PATH in js/script.js.

Do not upload a blank or placeholder PDF. Until the real file exists,
the site shows a short "being prepared" note instead of broken buttons.
