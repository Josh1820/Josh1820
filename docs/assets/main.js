const themeButton = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let selectedTheme = null;

try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') selectedTheme = savedTheme;
} catch {}

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0f1424' : '#f7f8fd';
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeButton.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
  }
};

applyTheme(selectedTheme || (systemTheme.matches ? 'dark' : 'light'));

if (themeButton) {
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    selectedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(selectedTheme);
    try { localStorage.setItem('portfolio-theme', selectedTheme); } catch {}
  });
}

systemTheme.addEventListener('change', (event) => {
  if (!selectedTheme) applyTheme(event.matches ? 'dark' : 'light');
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileViewport = window.matchMedia('(max-width: 900px)');

if (menuButton && navigation) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.querySelector('span').textContent = isOpen ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', isOpen);
  };

  const syncMenu = () => {
    const focusWillBeHidden = mobileViewport.matches && navigation.contains(document.activeElement);
    const menuHadFocus = document.activeElement === menuButton;
    menuButton.hidden = !mobileViewport.matches;
    document.documentElement.classList.toggle('menu-ready', mobileViewport.matches);
    setMenuOpen(false);
    if (focusWillBeHidden) menuButton.focus();
    if (!mobileViewport.matches && menuHadFocus) navigation.querySelector('a').focus();
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !mobileViewport.matches) return;
    setMenuOpen(false);
    const section = document.querySelector(link.hash);
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileViewport.addEventListener('change', syncMenu);
  syncMenu();
}

if ('IntersectionObserver' in window && navigation) {
  const navigationLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });

  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) sectionObserver.observe(section);
  }

  const introduction = document.querySelector('#top');
  if (introduction) sectionObserver.observe(introduction);
}
