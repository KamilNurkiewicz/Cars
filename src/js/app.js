import '../scss/main.scss';

const hamburger = document.querySelector('.main-header__hamburger');
const content = document.querySelector('.content');
const mainHeader = document.querySelector('.main-header');
const mainFooter = document.querySelector('.main-footer');
const navItems = document.querySelector('.mobile-nav__items');
const secondSection = document.querySelector('.second-section');
const screenPosition = window.innerHeight / 1.5;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('main-header__hamburger--active');
  content.classList.toggle('content--mobile-nav-active');
  mainHeader.classList.toggle('main-header--mobile-nav-active');
  mainFooter.classList.toggle('main-footer--mobile-nav-active');
  navItems.classList.toggle('mobile-nav__items--active');
});

const scrollAppear = () => {
  const secondSectionPosition = secondSection.getBoundingClientRect().top;

  if (secondSectionPosition < screenPosition) {
    secondSection.classList.add('second-section--animation');
  } else {
    secondSection.classList.remove('second-section--animation');
  }
};

window.addEventListener('scroll', scrollAppear);
