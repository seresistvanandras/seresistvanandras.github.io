# István András Seres — academic website

Static HTML/CSS/JavaScript site deployed with GitHub Pages. It works without a build step and its content scripts are loaded as local files, so the pages can also be previewed directly from disk.

## Updating content

- **Papers:** edit `assets/js/publication-data.js`. Keep entries newest first and include `year`, `title`, `authors`, `venue`, `pdf`, `sources`, `abstract`, and `topics`. Set `featured: true` for homepage selections. Put public PDFs under `assets/papers/` and use a relative path so the paper remains locally available.
- **Talks:** edit the `talks` array near the end of `talks.html`. Each entry powers search, aggregates, the complete talk index, metadata, and the time-sorted “More talks” list. Include `title`, `venue`, `date`, `place`, `city`, and `country`; use `[latitude, longitude]` coordinates for in-person events and `coords: null` for online talks. Only in-person entries appear on the map and geographic aggregates. Set one or more `topics` to populate map filters. Add `video`, `url`, `slides`, and `transcript` when available. Video embeds request captions by default when YouTube has a caption track. Use a year when an exact date is not documented. A talk can be opened directly with its generated `#talk-...` link.
- **Collaborators:** the collaboration graph reads the publication data, so adding a paper updates its coauthor relationships automatically. Keep portraits in `assets/images/collaborators/` and reference the local file in the graph’s portrait data.
- **Profile and navigation:** edit the corresponding HTML page and shared `assets/css/style.css` for visual changes. Pages use `data-shared-navigation`; update the shared link list and mobile behavior in `assets/js/mobile-nav.js`. The static links in each page remain as a no-JavaScript fallback.

Paper and talk detail dialogs have stable fragment links for sharing (for example, `publications.html#paper-forking-the-randao-manipulating-ethereum-s-distributed-randomness-beacon`). Page-level Open Graph metadata points at this GitHub Pages deployment and a locally hosted profile image.

`sitemap.xml` lists the public content pages and `robots.txt` points crawlers to the sitemap. The home, papers, and talks pages provide Schema.org structured data for the researcher, publications, and presentations.

## Privacy and accessibility

Cloudflare Web Analytics is enabled on the content pages using its cookieless beacon; no analytics cookies or cross-site user profiles are added by this site. Remove the beacon markup from the page footers if analytics should be disabled. Pages include a skip link, visible keyboard focus, and reduced-motion support.
