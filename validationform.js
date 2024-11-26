document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const form = document.getElementById("newsletterForm");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const submitBtn = document.getElementById("submitBtn");
    const nameError = document.getElementById("nameError"); // Error message for name
    const emailError = document.getElementById("emailError"); // Error message for email
  
    // Function to validate the name input
    function validateName() {
      const name = nameInput.value.trim(); // Get trimmed value of the name input
  
      // Check if the name is empty
      if (name === "") {
        nameError.textContent = "Name is required."; // Set error message if name is empty
        return false;
      }
      // Check if the name is less than 3 characters
      if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters."; // Set error message for short names
        return false;
      }
  
      // Clear the error message if the name is valid
      nameError.textContent = "";
      return true;
    }
  
    // Function to validate the email input
    function validateEmail() {
      const email = emailInput.value.trim(); // Get trimmed value of the email input
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format
  
      // Check if the email is empty
      if (email === "") {
        emailError.textContent = "Email is required."; // Set error message if email is empty
        return false;
      }
      // Check if the email format is invalid
      if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address."; // Set error message for invalid email
        return false;
      }
  
      // Clear the error message if the email is valid
      emailError.textContent = "";
      return true;
    }
  
    // Event listener for form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Validate name and email inputs
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
  
      // If both fields are valid, show a success message
      if (isNameValid && isEmailValid) {
        alert("Thank you! You are now subscribed.");
        form.reset(); // Clear the form inputs
        nameError.textContent = ""; // Clear any lingering error messages
        emailError.textContent = "";
      } else {
        // Focus on the first invalid input
        if (!isNameValid) {
          nameInput.focus();
        } else if (!isEmailValid) {
          emailInput.focus();
        }
      }
    });
  });
  




 