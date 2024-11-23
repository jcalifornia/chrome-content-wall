// Sample category data (replace with your actual categories)
const categories = [
    { name: "violence", enabled: false },
    { name: "profanity", enabled: false }
  ];
  
  // Load saved options
  chrome.storage.sync.get("categories", (data) => {
    if (data.categories) {
      categories = data.categories;
    }
    renderCategories();
  });
  
  // Render category checkboxes
  function renderCategories() {
    const categoriesDiv = document.getElementById("categories");
    categoriesDiv.innerHTML = "";
    for (const category of categories) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = category.name;
      checkbox.checked = category.enabled;
      const label = document.createElement("label");
      label.htmlFor = category.name;
      label.textContent = category.name;
      categoriesDiv.appendChild(checkbox);
      categoriesDiv.appendChild(label);
      categoriesDiv.appendChild(document.createElement("br"));
    }
  }
  
  // Save options
  document.getElementById("save").addEventListener("click", () => {
    for (const category of categories) {
      category.enabled = document.getElementById(category.name).checked;
    }
    chrome.storage.sync.set({ categories: categories });
  });
  