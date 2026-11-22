(() => {
  const publications = window.PUBLICATIONS || [];
  const list = document.getElementById('publication-list');
  const dialog = document.getElementById('paper-dialog');
  if (!list || !dialog) return;

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const searchInput = document.getElementById('publication-search');
  const yearFilter = document.getElementById('publication-year');
  const authorFilter = document.getElementById('publication-author');
  const topicFilter = document.getElementById('publication-topic');
  const count = document.getElementById('publication-results-count');
  const option = (select, value, label = value) => {
    const item = element('option', '', label);
    item.value = value;
    select.append(item);
  };
  const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const permalink = document.getElementById('paper-permalink');
  let openingFromHash = false;

  [...new Set(publications.map(paper => paper.year))].sort((a, b) => b - a)
    .forEach(year => option(yearFilter, String(year)));
  [...new Set(publications.flatMap(paper => paper.authors).filter(name => name !== 'István András Seres'))]
    .sort((a, b) => a.localeCompare(b)).forEach(author => option(authorFilter, author));
  [...new Set(publications.flatMap(paper => paper.topics || []))]
    .sort((a, b) => a.localeCompare(b)).forEach(topic => option(topicFilter, topic));

  const openPaper = paper => {
    document.getElementById('paper-dialog-title').textContent = paper.title;
    dialog.querySelector('.paper-dialog-venue').textContent = paper.venue;
    dialog.querySelector('.paper-dialog-authors').textContent = paper.authors.join(', ');
    dialog.querySelector('.paper-dialog-abstract').textContent = paper.abstract;
    const pdf = dialog.querySelector('.paper-pdf');
    pdf.href = paper.pdf;
    pdf.download = '';
    pdf.textContent = paper.pdfLabel || 'Download PDF ↗';
    const hash = `paper-${slug(paper.title)}`;
    permalink.href = `#${hash}`;
    if (!openingFromHash && location.hash !== `#${hash}`) history.replaceState(null, '', `#${hash}`);
    if (!dialog.open) dialog.showModal();
  };

  let activeYear;
  let yearGroup;
  publications.forEach(paper => {
    if (paper.year !== activeYear) {
      activeYear = paper.year;
      yearGroup = element('section', 'publication-year-group');
      yearGroup.dataset.year = String(activeYear);
      yearGroup.append(element('h2', 'year', String(activeYear)));
      list.append(yearGroup);
    }
    const card = element('article', 'pub paper-card');
    card.id = `paper-${slug(paper.title)}`;
    card.dataset.year = String(paper.year);
    card.dataset.authors = JSON.stringify(paper.authors);
    card.dataset.topics = JSON.stringify(paper.topics || []);
    card.dataset.search = [paper.title, paper.abstract, paper.venue, ...(paper.aliases || []), ...paper.authors]
      .join(' ').toLocaleLowerCase();
    card.append(element('div', 'venue', paper.venue));
    const title = element('div', 'title');
    const trigger = element('button', 'paper-open', paper.title);
    trigger.type = 'button';
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', () => openPaper(paper));
    title.append(trigger);
    card.append(title);
    card.append(element('div', 'authors', paper.authors.join(', ')));
    const links = element('div', 'links');
    const localPdf = element('a', '', paper.pdfLabel || 'Local PDF');
    localPdf.href = paper.pdf;
    localPdf.download = '';
    links.append(localPdf);
    paper.sources.forEach(source => {
      const anchor = element('a', '', source.label);
      anchor.href = source.href;
      if (/^https?:/.test(source.href)) {
        anchor.target = '_blank';
        anchor.rel = 'noopener';
      }
      links.append(anchor);
    });
    card.append(links);
    yearGroup.append(card);
  });

  const filterPapers = () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    let matches = 0;
    list.querySelectorAll('.paper-card').forEach(card => {
      const authors = JSON.parse(card.dataset.authors);
      const topics = JSON.parse(card.dataset.topics);
      const visible = (!query || card.dataset.search.includes(query))
        && (!yearFilter.value || card.dataset.year === yearFilter.value)
        && (!authorFilter.value || authors.includes(authorFilter.value))
        && (!topicFilter.value || topics.includes(topicFilter.value));
      card.hidden = !visible;
      if (visible) matches++;
    });
    list.querySelectorAll('.publication-year-group').forEach(group => {
      group.hidden = !group.querySelector('.paper-card:not([hidden])');
    });
    count.textContent = `Showing ${matches} of ${publications.length} publications`;
  };
  [searchInput, yearFilter, authorFilter, topicFilter].forEach(control => {
    control.addEventListener(control === searchInput ? 'input' : 'change', filterPapers);
  });
  document.getElementById('publication-clear').addEventListener('click', () => {
    searchInput.value = '';
    yearFilter.value = '';
    authorFilter.value = '';
    topicFilter.value = '';
    filterPapers();
    searchInput.focus();
  });
  filterPapers();

  dialog.querySelector('.detail-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (location.hash.startsWith('#paper-')) history.replaceState(null, '', `${location.pathname}${location.search}`);
  });
  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id.startsWith('paper-')) return;
    const paper = publications.find(item => `paper-${slug(item.title)}` === id);
    if (paper) {
      openingFromHash = true;
      openPaper(paper);
      openingFromHash = false;
    }
  };
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
