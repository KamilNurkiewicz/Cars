import '../scss/main.scss';

const hamburger = document.querySelector('.main-header__hamburger');
const content = document.querySelector('.content');
const mainHeader = document.querySelector('.main-header');
const mainFooter = document.querySelector('.main-footer');
const navItems = document.querySelector('.mobile-nav__items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('main-header__hamburger--active');
  content.classList.toggle('content--mobile-nav-active');
  mainHeader.classList.toggle('main-header--mobile-nav-active');
  mainFooter.classList.toggle('main-footer--mobile-nav-active');
  navItems.classList.toggle('mobile-nav__items--active');
});
