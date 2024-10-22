document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;

  const burgerMenu = document.getElementById('header-burger-menu');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('sidebar-close');
  const backgroundWaves = document.getElementById('home-what-is-it-background-wrapper');

  burgerMenu.addEventListener('click', () => {
    sidebar.classList.add('sidebar-show');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-show');
  });

  if (Boolean(backgroundWaves) && !pathname.includes('terms') && !pathname.includes('privacy')) {
    const calculateBackgroundWavesWidth = () => {
      const bodyWidth = document.body.clientWidth;
      backgroundWaves.style.width = `${bodyWidth}px`;
    }

    calculateBackgroundWavesWidth();
    window.addEventListener('resize', calculateBackgroundWavesWidth);
  }
});