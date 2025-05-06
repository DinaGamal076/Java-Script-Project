
//  *-----------------------------------------------------*

var myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://fakestoreapi.com/products/category/women's%20clothing");
myHttp.send();

myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        var myarr = JSON.parse(myHttp.response);
        console.log(myarr);
        displayProducts(myarr);
    }
});

function displayProducts(products) {
    var container = document.getElementById("products-container");
    var productImages = ["images/22.jpg", "images/2.jpg", "images/9.jpg", "images/4.jpg"];

    container.innerHTML = "";

    for (var i = 0; i < products.length && i < productImages.length; i++) {
        var productHTML = `
            <div class="col-lg-3 col-md-6">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${productImages[i]}" class="img-fluid">
                        <div class="overlay">
                            <button class="btn btn-light btn-icon add-to-cart" data-index="${i}">
                                <i class="fa-solid fa-basket-shopping fa-xs"></i>
                            </button>
                            <button class="btn btn-light btn-icon view-product" data-index="${i}"><i class="fas fa-eye fa-xs"></i></button> <!-- إضافة class "view-product" هنا -->
                        </div>
                    </div>
                    <div class="product-info">
                        <p class="category">WOMEN</p>
                        <h5 class="product-title">${products[i].title}</h5>
                        <p class="price">$${products[i].price.toFixed(2)}</p>
                        <div class="colors">
                            <span class="color black"></span>
                            <span class="color pink"></span>
                            <span class="color white"></span>
                        </div>
                        <div class="sizes">
                            <span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += productHTML;
    }

    setCartButtonListeners(products);
    setViewProductListenerwomen(products);
}

function setViewProductListenerwomen(products) {
    var viewButtons = document.querySelectorAll(".view-product");

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            var index = this.getAttribute("data-index");
            var product = products[index];

            window.location.href = `Buy-T-shirtandProdDetails/openDetailesWomen/index.html?id=${product.id}`;
        });
    });
}




//  *-----------------------------------------------------*




var menHttp = new XMLHttpRequest();
menHttp.open("GET", "https://fakestoreapi.com/products/category/men's%20clothing");
menHttp.send();

menHttp.addEventListener('readystatechange', function () {
    if (menHttp.readyState == 4 && menHttp.status == 200) {
        var menArr = JSON.parse(menHttp.response);
        console.log(menArr);
        displayMenProducts(menArr);
    }
});

function displayMenProducts(products) {
    var container = document.getElementById("products-container3");
    var productImages = ["images/1.jpg", "images/3.jpg", "images/10.jpg", "images/11.jpg"];

    container.innerHTML = "";

    for (var i = 0; i < products.length && i < productImages.length; i++) {
        var productHTML = `
            <div class="col-lg-3 col-md-6">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${productImages[i]}" class="img-fluid">
                        <div class="overlay">
                            <button class="btn btn-light btn-icon add-to-cart-man" data-product-index="${i}">
                                <i class="fa-solid fa-basket-shopping fa-xs"></i>
                            </button>
                            <button class="btn btn-light btn-icon view-product" data-product-index="${i}">
                                <i class="fas fa-eye fa-xs"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <p class="category">MEN</p>
                        <h5 class="product-title">${products[i].title}</h5>
                        <p class="price">$${products[i].price.toFixed(2)}</p>
                        <div class="colors">
                            <span class="color black"></span>
                            <span class="color pink"></span>
                            <span class="color white"></span>
                        </div>
                        <div class="sizes">
                            <span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += productHTML;
    }

    setViewProductListenersmen(products);
    setCartButtonListenersmen(products);
}

function setViewProductListenersmen(products) {
    var viewButtons = document.querySelectorAll(".view-product");

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            var index = this.getAttribute("data-product-index");
            var product = products[index];

            window.location.href = `Buy-T-shirtandProdDetails/openDetailes/index.html?id=${product.id}`;
        });
    });
}


//  *-----------------------------------------------------*

document.getElementById("checkout-cart").addEventListener("click", function () {
    window.location.href = "checkout.html";
});
document.getElementById("ShopBtn").addEventListener("click", function () {
    window.location.href = "Buy-T-shirtandProdDetails/buy-t-shirt/index.html";
});



//  *-----------------------------------------------------*


function setCartButtonListeners(products) {
    var addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            var index = this.getAttribute("data-index");
            var selectedProduct = products[index];
            addToCart(selectedProduct);
        });
    });
}

function setCartButtonListenersmen(products) {
    var addToCartButtons = document.querySelectorAll(".add-to-cart-man");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            var index = this.getAttribute("data-product-index");
            var selectedProduct = products[index];
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

