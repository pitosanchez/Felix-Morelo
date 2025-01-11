import { Carousel } from "./carousel";

function toggleMenu() {
    const menu = document.getElementById('menuPage');
    if (menu) { // Ensure menu exists
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

window.toggleMenu = toggleMenu


// function initSmoothScroll() {
//     const logoLink = document.querySelector('.logo-link');
//     if (logoLink) { // Ensure logo-link exists
//         logoLink.addEventListener('click', function (event) {
//             event.preventDefault();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         });
//     }
// }

new Carousel("carousel-1")
new Carousel("carousel-2")
new Carousel("carousel-3")

