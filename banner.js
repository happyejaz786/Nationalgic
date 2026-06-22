// banner.js
document.addEventListener("DOMContentLoaded", function() {
    const bannerContainer = document.getElementById('banner-container');
    if (!bannerContainer) return;

    // Yahan apni 5 images ke path daalein
    const images = [
        "images/slide1.jpg",
        "images/slide2.jpg",
        "images/slide3.jpg",
        "images/slide4.jpg",
        "images/slide5.jpg"
    ];

    let i = 0;
    function changeBanner() {
        bannerContainer.style.backgroundImage = `url('${images[i]}')`;
        i = (i + 1) % images.length;
    }
    
    // Har 4 second mein image change hogi
    setInterval(changeBanner, 4000);
    changeBanner(); // Initial call
});