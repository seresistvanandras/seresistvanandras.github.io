(() => {
  const target = document.getElementById('home-selected-work');
  if (!target) return;
  const selected = (window.PUBLICATIONS || []).filter(paper => paper.featured);
  selected.forEach(paper => {
    const card = document.createElement('article');
    card.className = 'pub';
    const venue = document.createElement('div');
    venue.className = 'venue';
    venue.textContent = `${paper.year} · ${paper.venue}`;
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = paper.title;
    const authors = document.createElement('div');
    authors.className = 'authors';
    authors.textContent = paper.authors.join(', ');
    const links = document.createElement('div');
    links.className = 'links';
    const pdf = document.createElement('a');
    pdf.href = paper.pdf;
    pdf.download = '';
    pdf.textContent = paper.pdfLabel || 'Local PDF';
    links.append(pdf);
    paper.sources.forEach(source => {
      const link = document.createElement('a');
      link.href = source.href;
      link.textContent = source.label;
      if (/^https?:/.test(source.href)) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      links.append(link);
    });
    card.append(venue, title, authors, links);
    target.append(card);
  });
})();
