// CART STORAGE (HashMap Concept)

let cart = {};
let total = 0;

// ADD TO CART

function addToCart(name, price){

    if(cart[name]){
        cart[name].quantity += 1;
    } else {
        cart[name] = {price: price, quantity: 1};
    }

    updateCart();
}

// UPDATE CART UI

function updateCart(){
  let cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  total = 0;
  let count = 0;
  for(let item in cart){
    let quantity = cart[item].quantity;
    let price = cart[item].price;
    let itemTotal = quantity * price;
    total += itemTotal;
    count += quantity;
    let li = document.createElement("li");
    li.innerText = item + " x " + quantity + " = ₹" + itemTotal;
    cartList.appendChild(li);
  }
  document.getElementById("total").innerText = total;
  document.getElementById("cartCount").innerText = count;

}

// SEARCH FOOD (LINEAR SEARCH)

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function(){

    let searchValue = searchBar.value.toLowerCase();

    let cards = document.querySelectorAll(".menu-card");

    cards.forEach(function(card){

        let foodName = card.querySelector("h3").innerText.toLowerCase();

        if(foodName.includes(searchValue)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// ================================
// SORT PRICE LOW → HIGH
// ================================

function sortLowHigh(){

    let container = document.getElementById("menuContainer");

    let cards = Array.from(container.children);

    cards.sort(function(a,b){

        let priceA = parseInt(a.querySelector("p").innerText.replace("₹",""));
        let priceB = parseInt(b.querySelector("p").innerText.replace("₹",""));

        return priceA - priceB;
    });

    container.innerHTML = "";

    cards.forEach(function(card){
        container.appendChild(card);
    });

}


// ================================
// SORT PRICE HIGH → LOW
// ================================

function sortHighLow(){

    let container = document.getElementById("menuContainer");

    let cards = Array.from(container.children);

    cards.sort(function(a,b){

        let priceA = parseInt(a.querySelector("p").innerText.replace("₹",""));
        let priceB = parseInt(b.querySelector("p").innerText.replace("₹",""));

        return priceB - priceA;
    });

    container.innerHTML = "";

    cards.forEach(function(card){
        container.appendChild(card);
    });

}
