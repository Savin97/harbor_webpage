# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pure static site — no build step, no package manager, no dependencies. Edit HTML/CSS files directly and serve as-is.

Two separate pages with distinct visual identities:

| Path | Purpose | Theme |
|------|---------|-------|
| `index.html` + `styles.css` | Breakwater product landing page | Dark (#0a0a0a bg) |
| `cv/index.html` + `cv/styles.css` | Michael Savin personal portfolio | Light (#ffffff bg) |

## Landing Page Conventions (`index.html` / `styles.css`)

**Typography**: DM Serif Display (headings) · IBM Plex Sans (body) · IBM Plex Mono (UI elements)

**CSS variables**: `--bg`, `--text`, `--text-muted`, `--text-dim`, `--accent` (#c9a84c gold), `--border`, `--max-w` (1180px)

**Staggered animation classes**: `.f1`–`.f5` apply `fadeUp` with increasing delays (12–52ms); new animated elements should use these classes.

**Responsive breakpoints**: 900px (two-column hero layout) · 520px (mobile)

**Form**: POSTs to Formspree endpoint `https://formspree.io/f/xykvrbqv` — no backend needed.

## Portfolio Conventions (`cv/index.html` / `cv/styles.css`)

**Typography**: Inter, system-ui sans-serif stack

**CSS variables**: `--bg`, `--text`, `--muted`, `--accent` (#6ea8fe blue), `--accent-2`, `--success`, `--panel`, `--panel-2`, `--shadow`

**Responsive breakpoints**: 1400px (large) · 960px (tablet) · 640px (mobile)

## General Rules

- Preserve the existing CSS variable and class naming patterns in each page.
- The `.gitignore` omits `btc_5m_prices.csv` (large data file) and `.venv/` — don't commit these.
- There is no JavaScript on either page; keep it that way unless explicitly asked to add it.
