function toggleMenu() {
    document.querySelector(".header__nav").classList.toggle("active");
    document.querySelector(".hamburger-icon").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".header__menuIcon");
    menuIcon.addEventListener("click", toggleMenu);
});