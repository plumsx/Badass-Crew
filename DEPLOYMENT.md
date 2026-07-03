# BDss Website Deployment

Diese Website ist statisch und braucht keinen Build-Schritt.

## Dateien

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `netlify.toml`
- `.nojekyll`

## Netlify

Wenn Netlify bereits mit einem GitHub-Repository verbunden ist:

1. Diese Dateien in den `main`-Branch des verbundenen Repositories hochladen.
2. Netlify startet danach automatisch ein neues Deployment.
3. Publish directory: `.`
4. Build command: leer lassen.

## GitHub Pages

1. Repository Settings öffnen.
2. Pages aktivieren.
3. Source: `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/ (root)`.

## Wichtig

Keinen geheimen Discord-Webhook in `script.js` speichern. Für echte Formular-Uploads später eine Netlify Function oder ein kleines Backend nutzen.
