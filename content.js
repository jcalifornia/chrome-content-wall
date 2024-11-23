// Get blocked categories from storage
chrome.storage.sync.get("categories", (data) => {
    const categories = data.categories || [];
    // Logic to analyze and block content based on categories
    // ... (This is the complex part)
  });
  
  // Example: Simple keyword blocking
  const blockedKeywords = ["Trump", "MAGA", "Make America Great Again", "Elon Musk"]; 
  const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
  for (const element of elements) {
    for (const keyword of blockedKeywords) {
      if (element.textContent.includes(keyword)) {
        element.style.display = "none"; 
      }
    }
  }