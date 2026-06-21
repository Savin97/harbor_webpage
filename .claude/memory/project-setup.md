---
name: project-setup
description: Core project facts — tech stack, structure, plugins, tooling decisions, and deployment
metadata:
  type: project
---

Pure static HTML/CSS site, no build tooling, no package manager. Two pages:
- Root (`index.html` + `styles.css`): Breakwater product landing page, dark theme → **harbor-markets.com**
- `/cv/` (`cv/index.html` + `cv/styles.css`): Michael Savin personal portfolio, light theme → **cv.harbor-markets.com**

**Why:** No JavaScript, no bundler needed — site is served as-is.
**How to apply:** Don't add build steps, npm scripts, or JS frameworks unless explicitly asked.

## Deployment

- Hosted on a DigitalOcean droplet (IP: 165.227.171.167)
- Web server: Nginx
- Files served from `/var/www/harbor_webpage/` on the droplet
- Domain purchased on Hostinger; DNS managed there
- SSL via certbot (Let's Encrypt)
- Nginx config for cv subdomain: `/etc/nginx/sites-available/cv.harbor-markets.com`

## Plugins installed

- `frontend-design@claude-plugins-official` (was pre-installed globally)
- `playwright@claude-plugins-official` (installed this session — use for visual verification)

## Tooling decisions

- HTML/CSS linting skipped — site is small enough that Playwright screenshots are sufficient
- GitHub CLI (`gh`) not installed; user declined installation
- Local dev: `python3 -m http.server 8080` (no Node.js/npm on system)
