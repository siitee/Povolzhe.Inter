const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
let currentSlide = 0;
const intervalTime = 4888;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, intervalTime);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

prevButton.addEventListener('click', () => {
  prevSlide();
  if (slideInterval) {
    stopSlideShow();
    startSlideShow();
  }
});

nextButton.addEventListener('click', () => {
  nextSlide();
  if (slideInterval) {
    stopSlideShow();
    startSlideShow();
  }
});

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    stopSlideShow();
  });
});

showSlide(currentSlide);
startSlideShow();