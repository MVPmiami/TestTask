import '../sass/style.scss';

const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger-list');

burger.addEventListener('click', () => {
  
  burger.classList.toggle('burger-active');
  burgerList.classList.toggle('burger-list-active');

})




