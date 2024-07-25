document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('carouselExampleDark');
    if (carouselElement) {

        // Optional: Custom event listeners or additional functionality
        carouselElement.addEventListener('slide.bs.carousel', function (event) {
            console.log('Slide event triggered. Direction:', event.direction);
        });
    }
});
