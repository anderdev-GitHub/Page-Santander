const sliderImgs = document.querySelectorAll('.slider-img');
let currentImg = 0;
const intervalTime = 5000;

function nextImg() {
  sliderImgs[currentImg].classList.remove('active');
  currentImg = (currentImg + 1) % sliderImgs.length;
  sliderImgs[currentImg].classList.add('active');
}

setInterval(nextImg, intervalTime);

  