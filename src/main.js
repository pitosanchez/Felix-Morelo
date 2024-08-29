// document.addEventListener('DOMContentLoaded', () => {
//     initCarousels();
//     initSmoothScroll();
// });

function toggleMenu() {
    const menu = document.getElementById('menuPage');
    if (menu) { // Ensure menu exists
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

window.toggleMenu = toggleMenu


function initSmoothScroll() {
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) { // Ensure logo-link exists
        logoLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initCarousels() {
    // Define your carousel initialization logic here
    console.log('Carousel initialized');
    // Add your carousel setup logic here
}


class Carousel {
    constructor(carouselSelector) {
        this.carouselInner = document.querySelector(carouselSelector);
        this.slides = this.carouselInner.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.initCarousel();
    }


    initCarousel() {
        this.showSlide(this.currentIndex);
        document.querySelectorAll(`[onclick*='${this.carouselInner.id}']`).forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button));
        });
    }

    showSlide(index) {
        if (index >= this.slides.length) this.currentIndex = 0;
        else if (index < 0) this.currentIndex = this.slides.length - 1;
        else this.currentIndex = index;

        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === this.currentIndex);
        });
    }

    handleButtonClick(button) {
        if (button.classList.contains('carousel-control-next')) {
            this.showSlide(this.currentIndex + 1);
        } else if (button.classList.contains('carousel-control-prev')) {
            this.showSlide(this.currentIndex - 1);
        }
    }
}
