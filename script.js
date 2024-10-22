const SCROLL_SCREENS_TO_SHOW_BUTTON_UP = 1.5;

document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;

  const buttonUp = document.getElementById('button-up');
  const burgerMenu = document.getElementById('header-burger-menu');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('sidebar-close');
  const backgroundWaves = document.getElementById('home-what-is-it-background-wrapper');

  const onScrollHandler = () => {
    const isNeedShowButton = window.scrollY >= (window.innerHeight * SCROLL_SCREENS_TO_SHOW_BUTTON_UP);

    if (isNeedShowButton) {
      buttonUp.classList.add('button-up-show');
    } else {
      buttonUp.classList.remove('button-up-show');
    }
  }

  const calculateBackgroundWavesWidth = () => {
    const bodyWidth = document.body.clientWidth;
    backgroundWaves.style.width = `${bodyWidth}px`;
  }

  window.addEventListener('scroll', onScrollHandler);

  buttonUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  burgerMenu.addEventListener('click', () => {
    sidebar.classList.add('sidebar-show');
    document.body.classList.add('body-with-opened-sidebar');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-show');
    document.body.classList.remove('body-with-opened-sidebar');
  });

  if (Boolean(backgroundWaves) && !pathname.includes('terms') && !pathname.includes('privacy')) {
    calculateBackgroundWavesWidth();
    window.addEventListener('resize', calculateBackgroundWavesWidth);
  }
});