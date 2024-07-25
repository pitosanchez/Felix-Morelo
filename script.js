document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.getElementById('carouselExampleDark');
    if (carouselElement) {
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            wrap: true
        });

        // Optional: Custom event listeners or additional functionality
        carouselElement.addEventListener('slide.bs.carousel', function (event) {
            console.log('Slide event triggered. Direction:', event.direction);
        });
    }
});
