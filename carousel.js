document.addEventListener("DOMContentLoaded", function () {
  // Select carousel elements
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentSlide = 0; // Track the current slide index

  // Function to show a specific slide
  function showSlide(index) {
    // Remove the active class from all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    // Add the active class to the current slide
    slides[index].classList.add("active");
  }

  // Event listener for "Next" button
  nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length; // Go to next slide (loop back to start)
    showSlide(currentSlide);
  });

  // Event listener for "Previous" button
  prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to previous slide (loop back to end)
    showSlide(currentSlide);
  });

  // Show the first slide on page load
  showSlide(currentSlide);
});

// Auto-play carousel
function autoPlayCarousel() {
  setInterval(() => {
    nextSlide(); // Automatically go to the next slide
  }, 3000); // Change slide every 3 seconds
}

// Start the carousel auto-play on page load
window.onload = autoPlayCarousel;

    