document.addEventListener('mousemove', function (e) {
    const goodLuckSpot = document.querySelector('.good-luck-spot');
    const rect = goodLuckSpot.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    goodLuckSpot.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
});


