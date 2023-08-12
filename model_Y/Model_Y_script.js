//button responce 1
const button = document.getElementById('myButton');

button.addEventListener('mousemove', () => {
// Simulate the button click action
button.click();
});

//button responce 2
const button1 = document.getElementById('myButton1');

button1.addEventListener('mousemove', () => {
// Simulate the button click action
button1.click();
});

//button responce3
const button2 = document.getElementById('myButton2');

button2.addEventListener('mousemove', () => {
// Simulate the button click action
button2.click();
});

//button responce 4 
const button3 = document.getElementById('myButton3');

button3.addEventListener('mousemove', () => {
// Simulate the button click action
button3.click();
});
//button responce 5
const button4 = document.getElementById('myButton4');

button4.addEventListener('mousemove', () => {
// Simulate the button click action
button4.click();
});

 // Adjust the height value as needed
 function setOffcanvasHeight(height) {
    const offcanvasElement = document.querySelector('.offcanvas');
    if (offcanvasElement) {
        offcanvasElement.style.height = `${height}px`;
    }
}

// Call the function with the desired height
setOffcanvasHeight(500); // Example: Set height to 500px
function setOffcanvasHeight1(height) {
    const offcanvasElement = document.querySelector('.offcanvas1');
    if (offcanvasElement) {
        offcanvasElement.style.height = `${height}px`;
    }
}

// Call the function with the desired height
setOffcanvasHeight1(350); // Example: Set height to 500px
function setOffcanvasHeight2(height) {
    const offcanvasElement = document.querySelector('.offcanvas2');
    if (offcanvasElement) {
        offcanvasElement.style.height = `${height}px`;
    }
}

// Call the function with the desired height
setOffcanvasHeight2(380); // Example: Set height to 500px
function setOffcanvasHeight3(height) {
    const offcanvasElement = document.querySelector('.offcanvas3');
    if (offcanvasElement) {
        offcanvasElement.style.height = `${height}px`;
    }
}

// Call the function with the desired height
setOffcanvasHeight3(450); // Example: Set height to 500px
function setOffcanvasHeight4(height) {
    const offcanvasElement = document.querySelector('.offcanvas4');
    if (offcanvasElement) {
        offcanvasElement.style.height = `${height}px`;
    }
}

// Call the function with the desired height
setOffcanvasHeight4(370); // Example: Set height to 500px

// menu mobile button section
function setOffcanvasHeight5(width) {
    const offcanvasElement = document.querySelector('.offcanvasM');
    if (offcanvasElement) {
        offcanvasElement.style.width = `${width}%`;
    }
}

// Call the function with the desired height
setOffcanvasHeight5(100); // Example: Set height to 500px

// menu Vehical mobile button section
function setOffcanvasHeight6(width) {
    const offcanvasElement = document.querySelector('.offcanvasMV');
    if (offcanvasElement) {
        offcanvasElement.style.width = `${width}%`;
    }
}

// Call the function with the desired height
setOffcanvasHeight6(100); // Example: Set height to 500px
//Energy
function setOffcanvasHeight7(width) {
    const offcanvasElement = document.querySelector('.offcanvasME');
    if (offcanvasElement) {
        offcanvasElement.style.width = `${width}%`;
    }
}

// Call the function with the desired height
setOffcanvasHeight7(100); // Example: Set height to 500px
//Charging
function setOffcanvasHeight8(width) {
    const offcanvasElement = document.querySelector('.offcanvasMC');
    if (offcanvasElement) {
        offcanvasElement.style.width = `${width}%`;
    }
}

// Call the function with the desired height
setOffcanvasHeight8(100);
//Discover
function setOffcanvasHeight9(width) {
    const offcanvasElement = document.querySelector('.offcanvasMD');
    if (offcanvasElement) {
        offcanvasElement.style.width = `${width}%`;
    }
}

// Call the function with the desired height
setOffcanvasHeight9(100);
//Shop
function setOffcanvasHeight10(width) {
    const offcanvasElement = document.querySelector('.offcanvasMS');
    if (offcanvasElement) {
        offcanvasElement.style.width = `${width}%`;
    }
}

// Call the function with the desired height
setOffcanvasHeight10(100);

//carosel
var carousel = document.getElementById("carousel");
var slides = carousel.querySelectorAll(".slide");
var currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].style.display = "block";
  slides[currentSlide - 1].style.display = "none";
}

setInterval(nextSlide, 3000);

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


//carosel 2
