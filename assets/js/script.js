function toggleMenu() {
    document.querySelector(".header__nav").classList.toggle("active");
    document.querySelector(".hamburger-icon").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".header__menuIcon");
    menuIcon.addEventListener("click", toggleMenu);
});

const body = document.body;

// Dark mode
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark-mode");

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

// Modal
document.getElementById("modal").addEventListener("click", () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeModal = document.querySelector(".modal-close");

    function openModal() {
        modalOverlay.classList.add("active");
        body.classList.add("active");
        body.style.overflow = "hidden";
    }

    function closeModalHandler() {
        modalOverlay.classList.remove("active");
        body.style.overflow = "auto";
    }

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModalHandler();
    });

    openModal();
});
