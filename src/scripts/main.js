const myCarousel = document.querySelector('#carouselPropaganda');

const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
});

const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach(item => {
    item.style.transition = 'transform 2s ease-in-out';
});
