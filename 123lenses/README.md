# 123 Lenses: A Field Guide to People, Systems, and Ideas

A lightweight, responsive static HTML series authored and curated by **Dr. Aniket Pingley**.

## Overview
123 cross-disciplinary lenses exploring cognitive biases, systems dynamics, evolutionary anthropology, Hindu philosophy, classical strategy, and institutional design. Available in two complementary formats:
- **⚡ 2-Minute Field Notes** (`lessons/`): Rapid, portable mental models and reflection prompts for daily decisions.
- **📖 10–15 Minute Deep Reads** (`deep-dives/`): Extended analytical essays featuring foundational book quotes, historical case studies, cognitive mechanics, and actionable heuristics.

## Design
- Plain HTML and CSS; no framework, package manager, build step or server.
- Mineral pastel archival color palette with domain accent borders.
- Small amount of vanilla JavaScript for search, topic filters, random exploration, and tile/list views.
- Dual-path reciprocal navigation on every lesson card and page.
- Every lesson is a standalone HTML page with its own stable URL.
- Responsive layout, accessible controls and reduced-motion support.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` and visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Upload the contents of this folder to the root of a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. No build command is needed.

## Maintain the series
Edit individual lesson files under `lessons/`. Update the matching entry in `assets/app.js` when changing a lesson title, topic, summary or URL. Keep published filenames stable to avoid breaking shared links.

## Substack
Each lesson is a short editorial unit. To create a Substack article, expand it with an opening case, fuller explanation, counterargument, primary-source links and a practical example. Link back to the corresponding page. Do not reproduce third-party text; credit and link to original sources.

## Attribution and reuse
The series is authored and curated by Dr. Aniket Pingley. Suggested reading lists credit intellectual sources; they do not imply endorsement by those authors.

A possible licence for original site text is **CC BY 4.0**, subject to the author's confirmation. This does not relicense third-party works, quotations, images, charts, trademarks or other source material. See https://creativecommons.org/licenses/by/4.0/.

The pages are introductory learning notes, not professional, legal, medical, financial or psychological advice. Verify references, editions and claims during editorial review before public release.
