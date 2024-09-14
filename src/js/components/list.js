const menuListItems = document.querySelectorAll('.open');

menuListItems.forEach(menuListItem => {
    const menuSublist = menuListItem.querySelector('.menu-sublist');

    menuListItem.addEventListener('click', () => {
        menuSublist.classList.toggle('open');
    });
});