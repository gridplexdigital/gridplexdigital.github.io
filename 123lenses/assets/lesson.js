(function () {
  const STORAGE_KEY = 'wiser_reading_mode';
  const defaultMode = localStorage.getItem(STORAGE_KEY) || 'deep-dive';

  function setMode(mode) {
    document.body.setAttribute('data-mode', mode);
    localStorage.setItem(STORAGE_KEY, mode);

    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
      const isActive = btn.dataset.mode === mode;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setMode(defaultMode);

    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        setMode(btn.dataset.mode);
      });
    });
  });
})();
