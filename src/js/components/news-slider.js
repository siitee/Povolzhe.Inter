const nextBtn = document.querySelector('.news__button--next');
const prevBtn = document.querySelector('.news__button--prev');
const newsSlider = document.querySelectorAll('.news__slider');

let currentIndex = 0;

nextBtn.addEventListener('click', function() {
  newsSlider[currentIndex].classList.remove('current');
  
  if (currentIndex >= newsSlider.length - 1) {
    currentIndex = -1;
  }

  currentIndex++;
  
  newsSlider[currentIndex].classList.add('current');
});

prevBtn.addEventListener('click', function() {
  newsSlider[currentIndex].classList.remove('current');
  
  if (currentIndex <= 0) {
    currentIndex = newsSlider.length;
  }

  currentIndex--;
  
  newsSlider[currentIndex].classList.add('current');
});