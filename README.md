# István András Seres — academic website

Static HTML/CSS/JavaScript site deployed with GitHub Pages. It works without a build step and its content scripts are loaded as local files, so the pages can also be previewed directly from disk.

## Updating content

- **Papers:** edit `assets/js/publication-data.js`. Keep entries newest first and include `year`, `title`, `authors`, `venue`, `pdf`, `sources`, `abstract`, and `topics`. Set `featured: true` for homepage selections. Put public PDFs under `assets/papers/` and use a relative path so the paper remains locally available.
- **Talks:** edit the `talks` array near the end of `talks.html`. Each entry powers the map, search, aggregates, complete talk index, and the time-sorted “More talks” list. Include `title`, `venue`, `date`, `place`, `city`, `country`, and `[latitude, longitude]` coordinates. Add `video`, `url`, and `slides` when available. A talk can be opened directly with its generated `#talk-...` link.
- **Collaborators:** the collaboration graph reads the publication data, so adding a paper updates its coauthor relationships automatically. Keep portraits in `assets/images/collaborators/` and reference the local file in the graph’s portrait data.
- **Profile and navigation:** edit the corresponding HTML page and shared `assets/css/style.css` for visual changes. Site navigation is enhanced by `assets/js/mobile-nav.js`.

Paper and talk detail dialogs have stable fragment links for sharing (for example, `publications.html#paper-forking-the-randao-manipulating-ethereum-s-distributed-randomness-beacon`). Page-level Open Graph metadata points at this GitHub Pages deployment and a locally hosted profile image.

## Privacy and accessibility

Cloudflare Web Analytics is enabled on the content pages using its cookieless beacon; no analytics cookies or cross-site user profiles are added by this site. Remove the beacon markup from the page footers if analytics should be disabled. Pages include a skip link, visible keyboard focus, and reduced-motion support.
