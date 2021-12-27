const menuIcon = document.getElementById('menu-icon');
const navActions = document.getElementById('nav-actions');

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  navActions.classList.toggle('hidden');
}
