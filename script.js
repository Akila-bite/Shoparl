// scipt for the available product links in the shopping page
document.getElementById("product-link").addEventListener("click", function() {
    window.open("https://example.com", "_blank"); // Opens in a new tab


// Script for the search-bar in the nav section

// How It Works
// Query: The user enters a search term, which is converted to lowercase for case-insensitive matching.
// Elements: All text-based elements on the page are selected (querySelectorAll).
// Highlighting: Elements with text matching the query are highlighted with yellow.

    // document.querySelector('.search-bar').addEventListener('click', function () {
    //     const query = document.querySelector('.search-bar input').value.toLowerCase();
    //     const elements = document.querySelectorAll('body *:not(script):not(style)');
      
    //     elements.forEach(el => {
    //       if (el.textContent.toLowerCase().includes(query)) {
    //         el.style.backgroundColor = 'yellow'; // Highlight matches
    //       } else {
    //         el.style.backgroundColor = 'none'; // Reset non-matching elements
    //       }
    //     });
    //   });


    const pages = [
      { title: "Shoparl-Proto", url: "index.html" },
      { title: "Shopping", url: "shopping.html" },
      { title: "Shopping_Notebooks", url: "Shopping_Notebooks.html" },
      { title: "Shopping_BagsandCases", url: "Shopping_BagsandCases.html" },
      { title: "Shopping_Planners", url: "Shopping_Planners.html" }
    ];
    // Enter key used to search
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        performSearch();
      }
    }

   
// Perform search
function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = pages.filter(page => page.title.toLowerCase().includes(query));

  displayResults(results);
}

// Display search results
function displayResults(results) {
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No matches found</p>";
  } else {
    results.forEach(result => {
      const link = document.createElement("a");
      link.href = result.url;
      link.textContent = result.title;
      link.style.display = "block";
      resultsDiv.appendChild(link);
    });
  }
}
 
    