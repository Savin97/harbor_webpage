---
name: run
description: Start a local HTTP server to preview the static site in a browser. Use when asked to run, start, or preview the site, or to verify visual changes.
disable-model-invocation: false
---

Start a local development server for this static site:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080 to view the landing page and http://localhost:8080/cv/ for the portfolio.

If port 8080 is in use, try 8000 or another available port.

After starting the server, use a browser tool (if available) to screenshot the page and verify the change looks correct before reporting back to the user.
