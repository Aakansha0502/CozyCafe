// Log when site is loaded
console.log("CozyCafe site loaded");

// Highlight navigation link of the current page
window.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.borderBottom = "2px solid yellow";
        }
    });

    // Add featured menu item highlights
    const featuredItems = document.querySelectorAll(".featured");
    featuredItems.forEach(item => {
        item.style.backgroundColor = "#fdf4e3";
        item.style.border = "1px solid #d4a373";
        item.style.padding = "10px";
        item.style.marginBottom = "15px";
        item.style.borderRadius = "8px";
        item.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
    });
});

// Smooth scroll to form section if hash in URL
if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

// Add simple fade-in animation to main content
window.addEventListener("load", () => {
    const main = document.querySelector("main");
    if (main) {
        main.style.opacity = 0;
        main.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            main.style.opacity = 1;
        }, 100);
    }
});
