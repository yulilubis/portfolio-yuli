// ============================
// MOBILE MENU
// ============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Menutup menu setelah memilih halaman

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// ============================
// SCROLL ANIMATION
// ============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-grid"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.7s ease";

    observer.observe(card);

});