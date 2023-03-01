const prevButton = document.querySelector('.carousel__prev');
const nextButton = document.querySelector('.carousel__next');
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const imageCount = images.length;
let currentImageIndex = 0;

function showImage(index) {
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');
    currentImageIndex = index;



}

prevButton.addEventListener('click', () => {
    const prevImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
    showImage(prevImageIndex);
});

nextButton.addEventListener('click', () => {
    const nextImageIndex = (currentImageIndex + 1) % imageCount;
    showImage(nextImageIndex);
});

showImage(currentImageIndex);