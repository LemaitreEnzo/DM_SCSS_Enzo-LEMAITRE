function toggleMenu() {
    document.querySelector(".header__nav").classList.toggle("active");
    document.querySelector(".hamburger-icon").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".header__menuIcon");
    menuIcon.addEventListener("click", toggleMenu);
});


// Dark mode
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark-mode");
    const body = document.body;

    // Vérifier le mode enregistré
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.removeItem("dark-mode");
        }
    });
});
