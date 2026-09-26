// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ============================
// APPLY BUTTON
// ============================

const applyBtn = document.getElementById("applyBtn");

applyBtn.addEventListener("click", function () {

    alert(
        "Thank you for your interest in Bloom Girls College! Admissions form will open soon."
    );

});


// ============================
// PROGRAM BUTTONS
// ============================

const learnButtons = document.querySelectorAll(".learn-btn");

learnButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "More information about this program will be available soon."
        );

    });

});


// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! Your message has been received."
    );

    contactForm.reset();

});