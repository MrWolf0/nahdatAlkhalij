async function loadImages() {
    try {
        const response = await fetch('gallery.json');
        const images = await response.json();

        const imageContainer = document.getElementById('image-container');

        images.forEach(imagePath => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = 'Gallery Image';

            slide.appendChild(img);
            imageContainer.appendChild(slide);
        });

        // Initialize Swiper after images are loaded
        new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 1000,
        });

    } catch (error) {
        console.error('Error loading images:', error);
    }
}

// Load images when the DOM is ready
document.addEventListener('DOMContentLoaded', loadImages);
