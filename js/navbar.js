window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".site-navbar");
    let navLinks = document.querySelectorAll(".site-menu li a"); // Select all nav links

    if (window.scrollY > 150) {
        navbar.style.background = "#f6eedb"; // Light background
        navbar.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.1)"; // Optional shadow

        // Change text color for better visibility
        navLinks.forEach(link => {
            link.style.color = "#1a1a1a"; // Dark color for contrast
        });
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0)"; // Transparent
        navbar.style.boxShadow = "none";

        // Reset text color to white (or any preferred color)
        navLinks.forEach(link => {
            link.style.color = "#ffffff"; // White color for better visibility on transparent navbar
        });
    }
});
