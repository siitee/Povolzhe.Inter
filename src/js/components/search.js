const searchBtn = document.querySelector('.bi-search');
const cancelBtn = document.querySelector('.bi-x');
const form = document.querySelector('.search__form');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

document.addEventListener('DOMContentLoaded', function() {
    searchBtn.addEventListener('click', function() {
      form.style.display = 'block';
      form.style.zIndex = '9999';
      form.style.focus = 'none';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100vh';
      overlay.style.zIndex = '99';
      document.body.appendChild(overlay);
    });

    cancelBtn.addEventListener('click', function() {
      form.style.display = 'none';
      overlay.remove();
    });

    document.addEventListener('click', function(event) {
        if (!form.contains(event.target) && event.target !== searchBtn) {
            form.style.display = 'none';
            overlay.remove();
        }
    });
});