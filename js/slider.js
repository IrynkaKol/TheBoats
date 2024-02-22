const images = document.querySelectorAll(
  " .about__slider .about__slider-line img"
);
const sliderLine = document.querySelector(".about__slider-line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".about__slider").offsetWidth;

  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  sliderLine.style.width = width * images.length + "px";
  rollSlider();
  console.log(width);
}

window.addEventListener("resize", init);
window.addEventListener("DOMContentLoaded", init);
init();

document
  .querySelector(".about__slider-right")
  .addEventListener("click", function () {
    count += 1;
    if (count >= images.length) {
      count = 0;
    }

    rollSlider();
  });

document
  .querySelector(".about__slider-left")
  .addEventListener("click", function () {
    count -= 1;
    if (count < 0) {
      count = images.length - 1;
    }

    rollSlider();
  });

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
