// Navbar toggle
const navOpenButton = document.querySelector("[data-nav-open]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseButton = document.querySelector("[data-nav-close]");
const mobileNavLinks = document.querySelectorAll("[data-nav-link]");

// opening navbar
navOpenButton.addEventListener("click", () => {
    navbar.classList.add("active");
    overlay.classList.add("active");
});

// utility function to close nav and remove overlay
const removeActiveClass = () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
    removeActiveClass();
});

navCloseButton.addEventListener("click", () => {
    removeActiveClass();
});

mobileNavLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        removeActiveClass();
    });
});