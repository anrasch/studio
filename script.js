document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;

    menuIcon.addEventListener('click', () => {
        body.classList.toggle('menu-open');
    });
});
