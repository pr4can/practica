document.addEventListener("DOMContentLoaded", function (event) {

    const portfolioSlider = new Swiper(".portfolio__slider", {
        // Default parameters
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    
});