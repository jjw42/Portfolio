const tbt = document.querySelector('.menu')
const menu = document.querySelector('.nav_menu')

tbt.addEventListener('click', () => {
  menu.classList.toggle('active')
});


const container = document.querySelector('.img-box'),
    slides = document.querySelectorAll('img'),
    slidecounter = slides.length;
let currentIndex = 0;


const images = document.querySelectorAll('.img');
let current = 0;

function showSlide() {
  for(let i=0; i<images.length; i++) {
    images[i].classList.remove('on');
  }
  current++;
  if(current > images.length) {
    current = 1;
  }
  images[current - 1].classList.add('on');
  setTimeout(showSlide, 2000);
}

showSlide();



