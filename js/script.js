/* ==========================
   Wild Spirit JavaScript
========================== */

/* ==========================
   Gallery Lightbox
========================== */

const galleryLinks = document.querySelectorAll(".gallery-lightbox");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

galleryLinks.forEach((link)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        lightbox.style.display="flex";

        lightboxImg.src = link.href;

        lightboxImg.alt = link.querySelector("img").alt;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});

// Close mobile nav menu after clicking a link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) 
                || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});
