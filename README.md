# Solex e‑Vidhyalaya Portal

Static GitHub Pages prototype for Solex Energies Learning & Development.

## Project files

- `login.html` / `auth.js` — handoff to the central Digital Operations Portal login
- `index.html` — learning dashboard
- `portal.css` — styling
- `theme.css` — Solex orange, charcoal and grey live theme
- `assets/solex-logo.png` — official Solex logo
- `course.html` / `course.js` — multilingual TOPCon lessons, progress and quiz
- `certificate.html` — printable completion certificate
- `admin.html` / `admin.js` — prototype course management
- `learning.css` — learning, admin and certificate styling
- `portal.js` — shared-session validation, role-aware navigation, courses, search and logout

## Shared login

Open e‑Vidhyalaya from the Digital Operations Portal. Direct visits are redirected to `solex-digital-portal/index.html?app=learning`; after login the learning portal opens in the full-viewport application workspace.

The current Employee ID, name, department and role are read from `solexPortalSession`. Course progress, quiz results and certificates are stored separately for each Employee ID. The Administration link is visible only to central portal administrators and Learning Administrators.

## Publish on GitHub Pages

1. Create a public repository named `solex-e-vidhalaya`.
2. Upload all project files and the complete `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose **main** and **/(root)**, then Save.
6. Open `https://YOUR-USERNAME.github.io/solex-e-vidhalaya/` from the central portal.

## Customize

- Users and application access: central portal `assets/config.js`
- Courses and progress: `portal.js`
- TOPCon lesson content and quiz answers: `course.js`
- Branding/content: `login.html` and `index.html`
- Colors/layout: `portal.css`

## Security warning

GitHub Pages is static. The shared session and role checks are a front-end prototype, not production authentication. For real controlled access, use a secure backend/database or Microsoft Entra ID and enforce authorization on the server.
