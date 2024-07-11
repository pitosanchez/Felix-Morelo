document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('assets/sound/writing.mp3'); // Path to the sound file
    const textElement = document.querySelector('.handwritten-script span');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    });
    observer.observe(textElement);
});
