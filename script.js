document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('header-burger-menu');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('sidebar-close');

  burgerMenu.addEventListener('click', () => {
    sidebar.classList.add('sidebar-show');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-show');
  });
});