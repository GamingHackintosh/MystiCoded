document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const itemList = document.querySelector('.item-list');

    menuButton.addEventListener('change', function() {
        if (menuButton.checked) {
            itemList.style.display = 'flex';
        } else {
            itemList.style.display = 'none';
        }
    });
});
