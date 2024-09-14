const burger = document.querySelector('.bi-list');
const menu = document.querySelector('.burger-menu');
const cancel = document.querySelector('.bi-x-lg');

document.addEventListener('DOMContentLoaded', function() {
  burger.addEventListener('click', function() {
    menu.style.display = 'block';
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.burger-menu') && event.target !== burger) {
    menu.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  cancel.addEventListener('click', function() {
    menu.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  burger.addEventListener('click', function() {
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.burger-menu') && event.target !== burger) {
    menu.style.display = 'none';
    document.body.style.overflow = '';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  cancel.addEventListener('click', function() {
    menu.style.display = 'none';
    document.body.style.overflow = '';
  });
});