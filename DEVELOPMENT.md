# Editing and previewing the portfolio

This repository contains a GitHub profile README and a static portfolio website. The website uses HTML, CSS and a small JavaScript enhancement; it needs no package installation or build step. Its content and project summaries remain usable without JavaScript.

## Open in VS Code

Open the `Josh1820` folder inside `Portfolio Files` with **File → Open Folder**. Review changes using the Source Control panel before committing or publishing.

## Local preview

Run this from the repository folder in the VS Code terminal:

```sh
python3 -m http.server 4178 --bind 127.0.0.1 --directory docs
```

Open <http://127.0.0.1:4178>. Stop the server with Ctrl+C.

## Where to edit

- `README.md`: GitHub profile introduction and selected work.
- `docs/index.html`: Website content, project summaries and navigation.
- `docs/assets/styles.css`: Colours, typography and responsive layout.
- `docs/assets/main.js`: Mobile navigation enhancement and current section indicator.
- `docs/assets/theme.js`: Applies the saved light/dark preference before the page paints. Dark mode is the default, regardless of the device preference; the header toggle remembers an explicit light or dark choice locally.
- `docs/projects/README.md`: Longer project notes.

Keep the profile, website and project notes consistent. Confirm project ownership, dates and permission to share before adding detail. Use public-safe screenshots only. The site deliberately links to LinkedIn instead of publishing a phone number, email address or the contact details in the CV.

## Review checks

- Check narrow mobile and desktop widths, including long headings and navigation.
- Use Tab, Shift+Tab, Enter and Escape to check the menu, links and project disclosures.
- Confirm the skip link reaches the main content and focus remains visible.
- Check the page with reduced motion, increased text size and JavaScript disabled.
- Confirm all links and page assets load from a subdirectory as well as the site root.
- Review project claims and repository visibility before adding external source links.

## Publishing later

No publishing is required for local review. When publishing has been approved, GitHub Pages can serve `main` → `/docs` from this repository. This repository is named `Josh1820`, not `Josh1820.github.io`, so its normal project Pages address would be `https://josh1820.github.io/Josh1820/`. Verify the actual Pages URL after configuration before adding it to the profile, CV or site metadata.

Do not treat a saved local change as a deployed website. There is no automatic deployment workflow in this change.
