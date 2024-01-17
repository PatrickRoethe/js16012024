import productsData from "./data/products.js";
console.log("products: ", productsData);

// 1. select the products container
const productsContainer = document.querySelector(".products-container");

// 2. create a variable to store the HTML markup
let productsHTML = "";

// 3. fill the variable with the products HTML markup
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

// 4. append the products HTML markup to the products container
productsContainer.innerHTML = productsHTML;

// 5. check if any of the FAV btns hearts clicked
const favourites = document.querySelectorAll(".heart");
console.log("favourites: ", favourites);

// 6. loop on the dom elements I selected (hearts, all the elements with class heart)
for (let heart of favourites) {
  heart.addEventListener("click", function () {
    console.log("Hey, you clicked me. I am the heart with index", heart);
    this.classList.toggle("active-heart");
  });
}

// 7. Sjekk Hesh sin kode, den er annrledes
