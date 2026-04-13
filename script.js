const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

// OPEN IMAGE
function openLightbox(img) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

// CLOSE BUTTON
closeBtn.onclick = function () {
    lightbox.style.display = "none";
}

// CLICK OUTSIDE IMAGE CLOSE
lightbox.onclick = function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
}
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});
