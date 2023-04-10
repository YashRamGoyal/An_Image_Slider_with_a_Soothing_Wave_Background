const sliderImages = document.querySelectorAll(".slider-image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentImageIndex = 0;

function showImage(index) {
  const currentImage = sliderImages[currentImageIndex];
  const nextImage = sliderImages[index];
  currentImage.classList.remove("active");
  nextImage.classList.add("active");
  nextImage.style.opacity = 0;
  let opacity = 0;
  const animationInterval = setInterval(() => {
    opacity += 0.1;
    currentImage.style.opacity = 1 - opacity;
    nextImage.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(animationInterval);
      currentImageIndex = index;
    }
  }, 30);
}

prevButton.addEventListener("click", () => {
  let index = currentImageIndex - 1;
  if (index < 0) {
    index = sliderImages.length - 1;
  }
  showImage(index);
});

nextButton.addEventListener("click", () => {
  let index = currentImageIndex + 1;
  if (index >= sliderImages.length) {
    index = 0;
  }
  showImage(index);
});

sliderImages[currentImageIndex].classList.add("active");
