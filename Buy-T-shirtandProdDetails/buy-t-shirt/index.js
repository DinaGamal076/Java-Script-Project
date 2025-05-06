const xhr = new XMLHttpRequest();
const productContainer = document.getElementById("product-container");
const sortDropdown = document.getElementById("sort-dropdown");

const fetchProducts = (sortOption = "") => {
  let apiURL = "https://fakestoreapi.com/products"; 
  
  if (sortOption) {
    if (sortOption === "latest") {
      apiURL = "https://fakestoreapi.com/products?sort=desc"; 
    } else if (sortOption === "rating") {
      apiURL = "https://fakestoreapi.com/products?sort=rating"; 
    } else if (sortOption === "price-low-high") {
      apiURL = "https://fakestoreapi.com/products?sort=price_asc"; 
    } else if (sortOption === "price-high-low") {
      apiURL = "https://fakestoreapi.com/products?sort=price_desc"; 
    }
  }

  xhr.open("GET", apiURL, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const products = JSON.parse(xhr.responseText);

    
      const filteredProducts = products.filter(product => product.category !== "electronics"&&product.category !== "jewelery");

      productContainer.innerHTML = "";  

 
      filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-12", "col-md-6", "col-lg-3");

        productCard.innerHTML = `
          <div class="product-card ">
            <div class="image-container  d-flex flex-column justify-content-center align-items-center">
              <img class="" src="${product.image}" alt="${product.title}">
            </div>
            <p class="text-secondary font-small mt-2">${product.category}</p>
            <p class="h5 fw-bold text-truncate text-center">${product.title}</p>
            <p class="text-secondary font-small fw-bold">$${product.price}</p>
          </div>
        `;
        productCard.addEventListener("click", () => {
          window.location.href = "../../Buy-T-shirtandProdDetails/openDetailes/index.html";
        });
        
        productContainer.appendChild(productCard);
      });
    } else {
      console.error("فشل في جلب البيانات. رمز الحالة:", xhr.status);
    }
  };

  xhr.send();
};


fetchProducts();
sortDropdown.addEventListener("click", function (event) {
  const sortOption = event.target.getAttribute("data-sort");
  if (sortOption) {
    fetchProducts(sortOption);  
  }
});
