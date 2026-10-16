# Rutik Sarvaiya — Portfolio

Personal portfolio website built with **HTML5, CSS3, Vanilla JavaScript and Bootstrap 5**.

## Project structure

```
Portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── resume/
│       └── README.txt
└── README.md
```

## Run locally

This site uses a `fetch()` check for the resume file, so serve it over HTTP
instead of opening `index.html` directly from the file system.

Any of these work:

**VS Code Live Server**

1. Install the Live Server extension.
2. Right-click `index.html` → *Open with Live Server*.

**Python**

```bash
# Python 3
python -m http.server 5500
```

Then open http://localhost:5500

**Node.js**

```bash
npx serve .
```

## Adding your resume

1. Save your PDF as `assets/resume/rutik-sarvaiya-resume.pdf`.
2. Reload the page — the Download and View buttons appear automatically.
3. Details: `assets/resume/README.txt`.

## Adding a project

1. Open `index.html` and find the `project-list` block.
2. Copy an existing `<article class="project-item">…</article>` and edit:
   - project name
   - description
   - technologies (`<li>` items)
   - GitHub link
   - Live demo link (only if a real deployment exists — remove the link otherwise)
3. The numbered index (`01`, `02`, …) is decorative; update it to match order.

## Customizing

- Colors, fonts and spacing: CSS variables at the top of `css/style.css`.
- Content (name, links, copy): `index.html`.
- Behaviour (year, nav, resume check): `js/script.js`.

## Tech stack

- Bootstrap 5.3.3 (CDN)
- Bootstrap Icons 1.11.3 (CDN)
- Google Fonts: Fraunces + Inter
- No build step, no frameworks
