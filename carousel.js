const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");
const images = slides.querySelectorAll("img");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");
let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function handlePrev() {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
  showSlide(currentSlide);
}

function handleNext() {
  currentSlide = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
}

prevButton.addEventListener("click", handlePrev);
nextButton.addEventListener("click", handleNext);

showSlide(currentSlide);
