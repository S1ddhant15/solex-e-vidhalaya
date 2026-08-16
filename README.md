# Solex e-Vidhayalay Portal

Static GitHub Pages prototype for Solex Energies Learning & Development.

## Project files

- `login.html` — login screen
- `index.html` — learning dashboard
- `portal.css` — styling
- `theme.css` — Solex orange, charcoal and grey live theme
- `assets/solex-logo.png` — official Solex logo
- `auth.js` — demonstration users and login validation
- `portal.js` — courses, search, navigation and logout

## Demo login

- Employee ID: `admin`
- Password: `Solex@123`
- Department: `Management`

## Publish on GitHub Pages

1. Create a public repository named `solex-e-vidhayalay`.
2. Upload all project files and the complete `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose **main** and **/(root)**, then Save.
6. Open `https://YOUR-USERNAME.github.io/solex-e-vidhayalay/login.html`.

## Customize

- Users: `auth.js`
- Courses and progress: `portal.js`
- Branding/content: `login.html` and `index.html`
- Colors/layout: `portal.css`

## Security warning

GitHub Pages is static. Credentials stored in JavaScript are visible to visitors, so this login is only for a prototype or presentation. For real controlled access, use a secure backend/database or Microsoft Entra ID and enforce authorization on the server.
