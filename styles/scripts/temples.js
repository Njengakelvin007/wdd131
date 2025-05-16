// Hamburger Toggle
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Footer Year and Last Modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
