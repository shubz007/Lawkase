
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".site-navbar");
    if (window.scrollY > 150) {
        navbar.style.background = " #D4AF37"; /* Light background */
        navbar.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.1)"; /* Optional shadow */
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0)"; /* Transparent */
        navbar.style.boxShadow = "none";
    }
});

