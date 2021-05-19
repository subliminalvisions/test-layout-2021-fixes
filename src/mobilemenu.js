const toggleElement = document.getElementById("checkbox-toggle");
const menuElement = document.getElementById("mobile-menu");

function toggleMenu(e) {
    menuElement.classList.toggle('open');
    menuElement.classList.toggle('isVisible');
    menuElement.classList.toggle('isHidden');
    e.preventDefault();
}

toggleElement.addEventListener('click', toggleMenu, false);
