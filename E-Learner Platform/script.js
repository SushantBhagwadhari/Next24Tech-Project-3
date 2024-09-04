// script.js

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 7000); // Change image every 7 seconds
});

// course.js

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.topic-button');
    const videoPlayer = document.getElementById('video');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
        });
    });
});
