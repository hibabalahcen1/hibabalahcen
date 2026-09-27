// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", function () {

        const button = form.querySelector("button");

        button.textContent = "Envoi en cours...";

        button.disabled = true;

    });

}