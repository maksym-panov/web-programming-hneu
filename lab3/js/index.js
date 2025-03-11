// CONTROL SIDE MENU DISPLAY
document.addEventListener('click', (event) => {
    const menu = document.getElementById('custom-menu');
    
    if (event.target.id === 'menu-button') {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
        return;
    }

    menu.style.display = 'none';
});

addEventListener("resize", (event) => {
    if (window.innerWidth > 1000) {
        document.getElementById('custom-menu').style.display = 'none';
    }
});