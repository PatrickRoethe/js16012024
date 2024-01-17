import productsData from "./data/products.js";
console.log("products: ", productsData);

// 1. Select the products container
const productsContainer = document.querySelector(".products-container");

// 2. Create a variable to store the HTML markup
let productsHTML = "";

// 3. Fill the variable with the products HTML markup
for (let i = 0; i < productsData.length; i++) {
  productsHTML += `
    <div class="product">
      <img alt="random photo" src="https://picsum.photos/200" />
      <h3>${productsData[i].name}</h3>
      <h4>NOK ${productsData[i].price}</h4>
      <span class="heart-container">
        <svg class="heart"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="#000000"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
    </div>
  `;
}

// 4. Append the products HTML markup to the products container
productsContainer.innerHTML = productsHTML;

// 5. Check if any of the FAV btns hearts clicked
const favourites = document.querySelectorAll(".heart");

// 6. Loop on the DOM elements selected (hearts, all the elements with class heart)
for (let heart of favourites) {
  heart.addEventListener("click", function () {
    // Toggle the "active-heart" class for visual indication
    this.classList.toggle("active-heart");

    // Save the clicked state in local storage
    const heartIndex = Array.from(favourites).indexOf(this);
    const savedState = localStorage.getItem("heartStates")
      ? JSON.parse(localStorage.getItem("heartStates"))
      : [];
    savedState[heartIndex] = this.classList.contains("active-heart");
    localStorage.setItem("heartStates", JSON.stringify(savedState));

    // Log the data saved in local storage
    console.log("Saved state in local storage:", savedState);
  });
}

// 7. Retrieve saved state from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedState = localStorage.getItem("heartStates")
    ? JSON.parse(localStorage.getItem("heartStates"))
    : [];

  // 8. Apply the saved state to visually indicate clicked hearts
  savedState.forEach((isHeartActive, index) => {
    if (isHeartActive) {
      favourites[index].classList.add("active-heart");
    }
  });
});
