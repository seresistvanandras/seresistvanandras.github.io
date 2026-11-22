document.querySelectorAll('header nav').forEach((nav, index) => {
  const brand = nav.querySelector(':scope > .brand');
  const links = [...nav.querySelectorAll(':scope > a:not(.brand)')];
  if (!brand || links.length === 0) return;

  const menu = document.createElement('button');
  menu.className = 'mobile-menu-toggle';
  menu.type = 'button';
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation menu');
  menu.innerHTML = '<span aria-hidden="true">☰</span><span>Menu</span>';

  const linkGroup = document.createElement('div');
  linkGroup.className = 'nav-links';
  linkGroup.id = `site-navigation-links-${index + 1}`;
  menu.setAttribute('aria-controls', linkGroup.id);
  links.forEach(link => linkGroup.append(link));
  brand.after(menu, linkGroup);

  const closeMenu = () => {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation menu');
    menu.innerHTML = '<span aria-hidden="true">☰</span><span>Menu</span>';
  };

  menu.addEventListener('click', () => {
    const opening = menu.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', opening);
    menu.setAttribute('aria-expanded', String(opening));
    menu.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
    menu.innerHTML = opening
      ? '<span aria-hidden="true">×</span><span>Close</span>'
      : '<span aria-hidden="true">☰</span><span>Menu</span>';
  });

  linkGroup.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menu.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
});
