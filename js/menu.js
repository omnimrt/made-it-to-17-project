let mobileMenuButton = document.querySelector('.header-mobile-menu');
let navigationMenu = document.querySelector('.navigation-menu');
let closeMenuButton = document.querySelector('.navigation-btn');
mobileMenuButton.addEventListener('click', () => {
  navigationMenu.classList.add('is-open');
});
closeMenuButton.addEventListener('click', () => {
  navigationMenu.classList.remove('is-open');
});
