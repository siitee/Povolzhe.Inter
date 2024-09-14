document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.basic__control-button--prev');
    const nextButton = document.querySelector('.basic__control-button--next');
    const slides = document.querySelectorAll('.basic-slides__column');
  
    let currentIndex = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    };
  
    const updateIndex = (index) => {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
    };
  
    prevButton.addEventListener('click', function() {
      updateIndex(currentIndex - 1);
      showSlide(currentIndex);
    });
  
    nextButton.addEventListener('click', function() {
      updateIndex(currentIndex + 1);
      showSlide(currentIndex);
    });
  
    showSlide(currentIndex);
  });