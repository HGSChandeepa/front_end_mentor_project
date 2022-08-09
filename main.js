// selectors

const hamburger = document.getElementById("hamburger");
const navBarUL = document.getElementById("nav-links");
const sliderAmount = document.querySelectorAll(".slider");
const LeftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

//user defined
let counter = 0;

//code for hamburger menu

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBarUL.classList.toggle("active");
});

document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBarUL.classList.remove("active");
  })
);

//code for slider

//functions for slider

//remove all sldes
function reset() {
  for (let i = 0; i < sliderAmount.length; i++) {
    sliderAmount[i].style.display = "none";
  }
}
// toggle the starting slide

function startSlide() {
  reset();
  sliderAmount[0].style.display = "block";
}

//show prev slide
function prevSlide() {
  reset();
  sliderAmount[counter - 1].style.display = "block";
  counter--;
}
//next slide

function nextSlide() {
  reset();
  sliderAmount[counter + 1].style.display = "block";
  counter++;
}

//left arrow click

LeftArrow.addEventListener("click", function () {
  if (counter === 0) {
    counter = sliderAmount.length;
  }
  prevSlide();
});

//right arrow

rightArrow.addEventListener("click", function () {
  if (counter == sliderAmount.length - 1) {
    counter = -1;
  }
  nextSlide();
});

startSlide();
