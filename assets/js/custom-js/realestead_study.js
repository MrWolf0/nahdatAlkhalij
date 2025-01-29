document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 60) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src; // Change the main image to the clicked thumbnail
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const zoomImage = document.getElementById('zoom-image');
    const mainImage = document.getElementById('main-image');

    imageContainer.addEventListener('mousemove', function (e) {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left; // X coordinate within the container
        const y = e.clientY - rect.top; // Y coordinate within the container

        // Update the position of the zoom image dynamically
        const zoomWidth = 700; // Width of the zoomed image
        const zoomHeight = 389; // Height of the zoomed image

        const left = -(x / rect.width) * (zoomWidth - rect.width); // Calculate left position
        const top = -(y / rect.height) * (zoomHeight - rect.height); // Calculate top position

        zoomImage.style.top = `${top}px`;
        zoomImage.style.left = `${left}px`;

        // Adjust background position for zoom effect
        const bgPosX = (x / rect.width) * 100;
        const bgPosY = (y / rect.height) * 100;

        zoomImage.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        zoomImage.style.opacity = 1;
    });

    imageContainer.addEventListener('mouseleave', function () {
        zoomImage.style.opacity = 0;
    });

    // Function to change the main image and zoom background on thumbnail click
    window.changeImage = function (imageUrl) {
        mainImage.src = imageUrl;
        zoomImage.style.backgroundImage = `url('${imageUrl}')`;
    };
});
