let cart = [];

        // دالة لإضافة عنصر إلى السلة
        function addToCart(itemName, itemPrice) {
            cart.push({ name: itemName, price: itemPrice });
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const cartItemsList = document.getElementById("cartItems");
            const totalPriceElement = document.getElementById("totalPrice");

            cartItemsList.innerHTML = '';

            let total = 0;
            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                cartItemsList.appendChild(listItem);
                total += item.price;
            });

            totalPriceElement.textContent = `$${total.toFixed(2)}`;
        }

        addToCart('T-shirt Red', 19.99);
        addToCart('T-shirt Blue', 24.99);
 
        

       

        
            
   
    
    

