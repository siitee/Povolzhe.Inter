const chatButtonIconOpen = document.querySelector('.chat-button__icon--open');
const chatButtonIconsClose = document.querySelectorAll('.chat-button__icon--close');

let iconsVisible = false;

chatButtonIconOpen.addEventListener('click', function() {
    if (!iconsVisible) {
        chatButtonIconsClose.forEach(function(icon) {
            icon.style.display = 'block';
        });
        iconsVisible = true;
    } else {
        chatButtonIconsClose.forEach(function(icon) {
            icon.style.display = 'none';
        });
        iconsVisible = false;
    }
});
