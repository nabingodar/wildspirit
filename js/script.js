/* ==========================
   Wild Spirit JavaScript
========================== */

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-item img");

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

// Open lightbox
galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

    });

});

// Close button
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// Close with Escape key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

});
