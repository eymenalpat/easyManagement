// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
      });
  
      dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
      });
    });
  });
  
  let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonialSlide");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "flex";  
  dots[slideIndex].className += " active";
  setTimeout(function() { showSlides(slideIndex += 1); }, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

const counters = document.querySelectorAll('.counter');
const animationDuration = 2000; // duration in milliseconds

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const incrementTime = animationDuration / target;
  let currentCount = 0;

  const counterInterval = setInterval(() => {
    currentCount += 1;
    // Check if the current count is less than 0 to add a plus sign
    if (target > 300) {
      counter.innerText = `+${currentCount}`;
    } else {
      counter.innerText = currentCount;
    }

    if (currentCount >= target) {
      clearInterval(counterInterval);
      // Ensure the plus sign is added at the end if the target is greater than 1000
      if (target > 300) {
        counter.innerText = `+${target}`;
      }
    }
  }, incrementTime);
});

let scrollAmount = 0;

const slider = document.querySelector('.partner-slider');
const scrollPerClick = slider.scrollWidth / 10; // Adjust based on the number of logos

setInterval(() => {
  if (scrollAmount < (slider.scrollWidth - slider.clientWidth)) {
    scrollAmount += scrollPerClick;
  } else {
    scrollAmount = 0;
  }
  slider.scrollLeft = scrollAmount;
}, 3000); // Scrolls every 3 seconds