import leftArrowImage from "/assets/img/left-arrow-white.svg"
import rightArrowImage from "/assets/img/right-arrow-white.svg"

export class Carousel {
    constructor(id) {
        const carousel = document.getElementById(id)
        if (!carousel) {
            throw new Error(`Carousel Element with ID ${id} not found.`)
        }
        this.carousel = carousel

        const images = Array.from(carousel.getElementsByTagName("img"))
        if (images.length < 3) {
            throw new Error("Carousel must contain at least 3 images.")
        }
        this.images = images

        this.currentImageIndex = 0

        const leftButtonElement = document.createElement("button")
        this.leftButtonElement = leftButtonElement

        const rightButtonElement = document.createElement("button")
        this.rightButtonElement = rightButtonElement

        this.init()

    }

    init() {
        this.setUpArrowButtons()
        this.setUpClasses()

    }

    next() {
        this.disableButtons();
        // Grab the previous and next image indexes
        const currentPreviousImageIndex =
            (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        const currentNextImageIndex =
            (this.currentImageIndex + 1) % this.images.length;
        const newNextImageIndex = (currentNextImageIndex + 1) % this.images.length;

        // Remove the prev class from the previous image
        this.images[currentPreviousImageIndex].classList.remove("prev");

        // Remove the active class from the current image
        this.images[this.currentImageIndex].classList.remove("active");
        this.images[this.currentImageIndex].classList.add("prev");

        // Remove the next class from the next image
        this.images[currentNextImageIndex].classList.remove("next");
        this.images[currentNextImageIndex].classList.add("active");

        // Add the next class to the next
        this.images[newNextImageIndex].classList.add("next");

        // Set the current image index to the next image index
        this.currentImageIndex = currentNextImageIndex;
    }

    prev() {
        this.disableButtons();
        const currentPreviousImageIndex =
            (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        const currentNextImageIndex =
            (this.currentImageIndex + 1) % this.images.length;
        const newPreviousImageIndex =
            (currentPreviousImageIndex - 1 + this.images.length) % this.images.length;

        // Remove the next class from the next image
        this.images[currentNextImageIndex].classList.remove("next");

        // Remove the active class from the current image
        this.images[this.currentImageIndex].classList.remove("active");
        this.images[this.currentImageIndex].classList.add("next");

        // Remove the prev class from the previous image
        this.images[currentPreviousImageIndex].classList.remove("prev");
        this.images[currentPreviousImageIndex].classList.add("active");

        // Add the prev class to the previous
        this.images[newPreviousImageIndex].classList.add("prev");

        // Set the current image index to the next image index
        this.currentImageIndex = currentPreviousImageIndex;
    }

    disableButtons() {
        this.leftButtonElement.disabled = true;
        this.leftButtonElement.classList.add("disabled");

        this.rightButtonElement.disabled = true;
        this.rightButtonElement.classList.add("disabled");

        setTimeout(() => {
            this.leftButtonElement.disabled = false;
            this.leftButtonElement.classList.remove("disabled");

            this.rightButtonElement.disabled = false;
            this.rightButtonElement.classList.remove("disabled");
        }, 600);
    }


    setUpArrowButtons() {
        const leftArrow = document.createElement("img")
        leftArrow.src = leftArrowImage
        this.leftButtonElement.className = "arrow-button left"
        this.leftButtonElement.appendChild(leftArrow)
        this.leftButtonElement.addEventListener("click", () => this.prev())
        this.carousel.appendChild(this.leftButtonElement)


        const rightArrow = document.createElement("img")
        rightArrow.src = rightArrowImage
        this.rightButtonElement.className = "arrow-button right"
        this.rightButtonElement.appendChild(rightArrow)
        this.rightButtonElement.addEventListener("click", () => this.next())
        this.carousel.appendChild(this.rightButtonElement)
    }

    setUpClasses() {
        this.carousel.classList.add("carousel")

        this.images[0].classList.add("active")
        this.images[1].classList.add("next")
        this.images[this.images.length - 1].classList.add("prev")

        this.images.forEach((image) => {
            image.classList.add("carousel-photo")

        })
    }
}
