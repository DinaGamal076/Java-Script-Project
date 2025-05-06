window.addEventListener("DOMContentLoaded", function () {
    setCartButtonListeners2();
});

function setCartButtonListeners2() {
    var addToCartButtons = document.querySelectorAll(".add-to-cart2");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            var productTitle = this.getAttribute("data-product-title");
            var productPrice = parseFloat(this.getAttribute("data-product-price"));

            var selectedProduct = {
                title: productTitle,
                price: productPrice
            };

            addToCart(selectedProduct);
        });
    });
}
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();
    alert("The product addaed successfully !!! Please check the Cart ")
}

function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cartItems");
    let totalPriceElement = document.getElementById("totalPrice");

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((product, index) => {
        let cartItemHTML = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${product.title} - $${product.price.toFixed(2)}
                    <button class="btn btn-sm btn-danger remove-item" data-index="${index}">X</button>
                </li>
            `;
        cartItemsContainer.innerHTML += cartItemHTML;
        totalPrice += product.price;
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            removeCartItem(index);
        });
    });
}

function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();
}
window.onload = function () {
    updateCartDisplay();
};

