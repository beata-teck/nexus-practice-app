# Dashboard clone

This folder contains a simple static clone of the UI visible at `https://react-components-project-seven.vercel.app/`.

Files:
- `index.html` — main static page
- `styles.css` — basic styling
- `scripts.js` — small interaction (sidebar toggle)

How to run locally:

Open `index.html` in your browser. For a local server (recommended), run one of these commands from PowerShell in this folder:

```powershell
# Python 3
python -m http.server 8080

# or with Node (if you have serve installed)
npx serve -l 8080
```

Then open `http://localhost:8080` in your browser.

Notes:
- This is a visual/structural clone only — no backend functionality included.
- Assets are referenced from the original site where available; save local copies to `assets/` if you want an offline copy.
