// scipt for the available product links in the shopping page
document.getElementById("product-link").addEventListener("click", function() {
    window.open("https://example.com", "_blank"); // Opens in a new tab


// Script for the search-bar in the nav section

// How It Works
// Query: The user enters a search term, which is converted to lowercase for case-insensitive matching.
// Elements: All text-based elements on the page are selected (querySelectorAll).
// Highlighting: Elements with text matching the query are highlighted with yellow.

    document.querySelector('.search-bar button').addEventListener('click', function () {
        const query = document.querySelector('.search-bar input').value.toLowerCase();
        const elements = document.querySelectorAll('body *:not(script):not(style)');
      
        elements.forEach(el => {
          if (el.textContent.toLowerCase().includes(query)) {
            el.style.backgroundColor = 'yellow'; // Highlight matches
          } else {
            el.style.backgroundColor = ''; // Reset non-matching elements
          }
        });
      });
         