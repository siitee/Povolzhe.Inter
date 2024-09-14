function showColumn(columnIndex) {
    const columns = document.querySelectorAll('.necessary-column');
    const buttons = document.querySelectorAll('.necessary__button');
    columns.forEach((column, index) => {
        if (index === columnIndex - 1) {
            column.classList.add('necessary-column--current', 'visible');
        } else {
            column.classList.remove('necessary-column--current', 'visible');
        }
    });
    buttons.forEach((button, index) => {
        if (index === columnIndex - 1) {
            button.classList.add('necessary__button--active');
        } else {
            button.classList.remove('necessary__button--active');
        }
    });
}