const sliderSection = document.querySelector('.slider');
const upBtn = document.querySelector('.up-btn');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target === sliderSection) {
            if (entry.isIntersecting) {
                upBtn.style.display = 'none';
            } else {
                upBtn.style.display = 'block';
            }
        }
    });
}, { threshold: 0 });

observer.observe(sliderSection);

upBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});