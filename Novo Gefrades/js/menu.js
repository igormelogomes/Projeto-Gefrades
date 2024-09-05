// Selecione os elementos do carrossel
const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);

// Configurações do carrossel
const slideWidth = slides[0].getBoundingClientRect().width;
let slidePosition = 0;

// Defina a propriedade left para cada slide
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

// Função para mover o carrossel para a próxima posição
const moveToNextSlide = () => {
    if (slidePosition === slides.length - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    const nextSlide = slides[slidePosition];
    carousel.style.transform = `translateX(-${nextSlide.style.left})`;
};

// Função para mover o carrossel para a posição anterior
const moveToPreviousSlide = () => {
    if (slidePosition === 0) {
        slidePosition = slides.length - 1;
    } else {
        slidePosition--;
    }
    const previousSlide = slides[slidePosition];
    carousel.style.transform = `translateX(-${previousSlide.style.left})`;
};

// Adicione os eventos de clique para os botões de navegação
// Função para mover o carrossel para a próxima posição
const moveToNextSlide = () => {
    if (slidePosition === slides.length - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    const nextSlide = slides[slidePosition];
    carousel.style.transform = `translateX(-${nextSlide.style.left})`;
};

// Função para mover o carrossel para a posição anterior
const moveToPreviousSlide = () => {
    if (slidePosition === 0) {
        slidePosition = slides.length - 1;
    } else {
        slidePosition--;
    }
    const previousSlide = slides[slidePosition];
    carousel.style.transform = `translateX(-${previousSlide.style.left})`;
};

document.querySelector('.carousel__button--next').addEventListener('click', moveToNextSlide);
document.querySelector('.carousel__button--prev').addEventListener('click', moveToPreviousSlide);
// menu.js
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
