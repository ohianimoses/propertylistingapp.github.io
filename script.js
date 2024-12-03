// slider

let currentSlide = 1;
                  let totalSlides = 10;
                  
                  $('.next').click(function() {
                    if (currentSlide < totalSlides) {
                      currentSlide++;
                      $('.row').animate({
                        scrollLeft: '+=' + (300 * currentSlide) + 'px'
                      }, 500);
                      updateNumeration();
                    }
                  });
                  
                  $('.prev').click(function() {
                    if (currentSlide > 1) {
                      currentSlide--;
                      $('.row').animate({
                        scrollLeft: '-=' + (300 * currentSlide) + 'px'
                      }, 500);
                      updateNumeration();
                    }
                  });
                  
                  function updateNumeration() {
                    $('.numeration span').text(currentSlide + '/' + totalSlides);
                  }


//Password Show/Hide
const passwordinputs = document.querySelectorAll('input[type="password"]');
passwordinputs.forEach(input=> {
  const toggleButton =
  document.createElement('button');
  toggleButton.textContent = 'Show';
  input.parentNode.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () =>{
  if(input.type === 'password'){
    input.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    input.type = 'password';
    toggleButton.textContent = 'Show';
  }


  });

  });


  
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form validation script
function validateForm() {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  
  if (!email.value.includes('@')) {
      alert('Please enter a valid email address.');
      return false;
  }

  if (phone.value.length !== 11 || isNaN(phone.value)) {
      alert('Please enter a valid phone number.');
      return false;
  }

  return true;
}

// Property search script
document.getElementById('search-input').addEventListener('keyup', function () {
  const filter = this.value.toUpperCase();
  const listings = document.querySelectorAll('.card');

  listings.forEach(listing => {
      const text = listing.textContent || listing.innerText;
      if (text.toUpperCase().includes(filter)) {
          listing.style.display = "";
      } else {
          listing.style.display = "none";
      }
  });
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = document.querySelectorAll("img");

  const lazyLoad = (img) => {
      const src = img.getAttribute("data-src");
      if (!src) {
          return;
      }
      img.src = src;
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              lazyLoad(entry.target);
              imageObserver.unobserve(entry.target);
          }
      });
  });

  lazyImages.forEach(image => {
      imageObserver.observe(image);
  });
});

// Image carousel slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".card");
  slides.forEach(slide => {
      slide.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

