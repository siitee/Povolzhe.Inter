document.addEventListener('DOMContentLoaded', function() {
const widgetButtonIconOpen = document.querySelector('.widget-button__icon--open');
const widgetButtonIconsClose = document.querySelectorAll('.widget__icon');
let iconsVisible = false;
    
widgetButtonIconOpen.addEventListener('click', function() {
    if (!iconsVisible) {
widgetButtonIconsClose.forEach(function(icon) {
    icon.style.display = 'block';
});
    iconsVisible = true;
    } else {
widgetButtonIconsClose.forEach(function(icon) {
    icon.style.display = 'none';
});
    iconsVisible = false;
    }
});
});