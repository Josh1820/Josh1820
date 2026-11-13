(() => {
  let savedTheme;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
  const theme = savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : 'dark';
  document.documentElement.dataset.theme = theme;
})();
