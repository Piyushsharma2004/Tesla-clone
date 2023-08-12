var carousel = document.getElementById("carousel-1");
var slides = carousel.querySelectorAll(".slide-1");
var currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].style.display = "block";
  slides[currentSlide - 1].style.display = "none";
}

setInterval(nextSlide, 100000);

var manualButton = document.getElementById("manual");
var autoplayButton = document.getElementById("autoplay");

manualButton.addEventListener("click", function() {
  if (autoplayButton.checked) {
    autoplayButton.checked = false;
  }
});

autoplayButton.addEventListener("click", function() {
  if (manualButton.checked) {
    manualButton.checked = false;
  }
});


//
$(document).ready(function() { });
