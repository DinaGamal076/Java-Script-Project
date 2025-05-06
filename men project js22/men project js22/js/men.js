function openmenu()
{
    document.getElementById("show").classList.toggle("active");

}
fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(response => response.json())
    .then(data => {
        let firstProduct = data[0]; 
        let secondProduct = data[1]; 
        let thirdProduct = data[2]; 
        let fourthProduct = data[3]; 
      
        var image1=document.getElementById("image1");
        image1.src = firstProduct.image;
        image1.alt = firstProduct.title;
        var image2=document.getElementById("image2");
        image2.src = secondProduct.image;
        image2.alt = secondProduct.title;
        var image3=document.getElementById("image3");
        image3.src = thirdProduct.image;
        image3.alt = thirdProduct.title;
        var image4=document.getElementById("image4");
        image4.src = fourthProduct.image;
        image4.alt = fourthProduct.title;

        var price1=document.getElementById("price1");
        price1.innerHTML = firstProduct.price;
        var price2=document.getElementById("price2");
        price2.innerHTML = secondProduct.price;
        var price3=document.getElementById("price3");
        price3.innerHTML = thirdProduct.price;
        var price4=document.getElementById("price4");
        price4.innerHTML = fourthProduct.price;

        var title1=document.getElementById("title1");
        title1.innerHTML = firstProduct.title;
        var title2=document.getElementById("title2");
        title2.innerHTML = secondProduct.title;
        var title3=document.getElementById("title3");
        title3.innerHTML = thirdProduct.title;
        var title4=document.getElementById("title4");
        title4.innerHTML = fourthProduct.title;
       
    })
    function sortProductsByPrice(products) {
        products.sort((a, b) => b.price - a.price);
    }
function closemenu()
{
    document.getElementById("show").classList.remove("active");
}
    
    const image=document.getElementById("image");
function changetoblack()
{
    console.log(image.src)

    if (image.src.endsWith("1.jpg")) {
        image.src = "images/black.jpg";
    }
    else if (image.src.endsWith("black.jpg")) {
        image.src = "images/1.jpg";
    }
}
function changetoBink()
{
    console.log(image.src)

    if (image.src.endsWith("1.jpg")) {
        image.src = "images/bink.jpg";
    }
    else if (image.src.endsWith("bink.jpg")) {
        image.src = "images/1.jpg";
    }
}
function changetoWhie()
{
    console.log(image.src)

    if (image.src.endsWith("1.jpg")) {
        image.src = "images/white.jpg";
    }
    else if (image.src.endsWith("white.jpg")) {
        image.src = "images/1.jpg";
    }
}
function redirectToProductDetails(productId) {
 
    window.location.href = `../../Buy-T-shirtandProdDetails/openDetailes/index.html`;
}

