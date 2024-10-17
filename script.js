document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('header-burger-menu');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('sidebar-close');
  const backgroundWaves = document.getElementById('home-what-is-it-background-wrapper');

  const calculateBackgroundWavesWidth = () => {
    const bodyWidth = document.body.clientWidth;
    backgroundWaves.style.width = `${bodyWidth}px`;
  }

  burgerMenu.addEventListener('click', () => {
    sidebar.classList.add('sidebar-show');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-show');
  });

  if (backgroundWaves) {
    calculateBackgroundWavesWidth();
    window.addEventListener('resize', calculateBackgroundWavesWidth);
  }
});