document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const showSlide = function(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    };

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});

const puppeteer = require('puppeteer');

async function validateLayout() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const sizes = [
        { width: 375, height: 812, name: 'iPhone X' },
        { width: 768, height: 1024, name: 'iPad' },
        { width: 1366, height: 768, name: 'Laptop' },
        { width: 1920, height: 1080, name: 'Desktop' },
    ];

    for (let size of sizes) {
        await page.setViewport({ width: size.width, height: size.height });
        await page.goto('http://localhost:8080'); // Replace with the actual URL
        await page.screenshot({ path: `layout-${size.name}.png` });
    }

    await browser.close();
}

validateLayout();
