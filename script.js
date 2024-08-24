// script.js

function toggleMenu() {
    const menu = document.getElementById('menuPage');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Smooth scroll for home button
document.querySelector('.logo-link').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carousel JavaScript
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize Carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

// Additional Carousel for Spots Section
let currentIndexSpots = 0;

function showSlideSpots(index) {
    const slidesSpots = document.querySelectorAll('#carouselInnerSpots .carousel-item');
    if (index >= slidesSpots.length) {
        currentIndexSpots = 0;
    } else if (index < 0) {
        currentIndexSpots = slidesSpots.length - 1;
    } else {
        currentIndexSpots = index;
    }

    slidesSpots.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndexSpots) {
            slide.classList.add('active');
        }
    });
}

function nextSlideSpots() {
    showSlideSpots(currentIndexSpots + 1);
}

function prevSlideSpots() {
    showSlideSpots(currentIndexSpots - 1);
}

// Initialize Spots Carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlideSpots(currentIndexSpots);
});
