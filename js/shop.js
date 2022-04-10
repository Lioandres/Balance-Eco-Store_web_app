// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  // for (i = 1; i <= 9; i++) {
  //   if (i === id) cartList.push(products[id - 1]);
  // }
  // console.log(cartList);
  addToCart(id)
}

// Exercise 2
function cleanCart() {
  cartList = [];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let totalPrice = 0;
  for (product of cartList) {
    totalPrice += product.price;
  }
  console.log(totalPrice);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  for (productList of cartList) {
    let i = 0;
    let productRepeted = false;
    while (i < cart.length && productRepeted === false) {
      if (productList.id === cart[i].id) {
        productRepeted = true;
        cart[i].quantity++;
        cart[i].subtotal += cart[i].price;
      }

      i++;
    }
    if (productRepeted === false) {
      cart.push(productList);
      cart[cart.length - 1].quantity = 1;
      cart[cart.length - 1].subtotal = productList.price;
      cart[cart.length - 1].subtotalWithDiscount = 0;
    }
  }
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((productCart) => {
    if (productCart.offer) {
      if (productCart.quantity >= productCart.offer.number) {
        productCart.subtotalWithDiscount =
          (productCart.subtotal * (1-productCart.offer.percent/100))
      }
      if (productCart.quantity < productCart.offer.number) {
        productCart.subtotalWithDiscount = productCart.subtotal;
      }
    }
    if (!productCart.offer) {
      productCart.subtotalWithDiscount = productCart.subtotal;
    }
  });
  
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  
    let i = 0;
    let productRepeted = false;
    while (i < cart.length && productRepeted === false) {
      if (id === cart[i].id) {
        productRepeted = true;
        cart[i].quantity++;
        cart[i].subtotal += cart[i].price;
        applyPromotionsCart()
      }

      i++;
    }
    if (productRepeted === false) {
      cart.push(products[id-1]);
      cart[cart.length - 1].quantity = 1;
      cart[cart.length - 1].subtotal = products[id-1].price;
      cart[cart.length - 1].subtotalWithDiscount = 0;
      applyPromotionsCart()
    }
  
  console.log(cart);
}

// Exercise 8
function removeFromCart(identificador) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let i = 0;
  let productFound;
  while (i < cart.length && !productFound) {
    if (identificador === cart[i].id) productFound = cart[i];
    if (identificador != cart[i].id) i++;
  }
  if(productFound){
    if (productFound.quantity===1)  cart.splice(i,1) 
    if (productFound.quantity>1){
        productFound.quantity-=1
        productFound.subtotal-=productFound.price
        applyPromotionsCart()
    }    
  }
  if (!productFound) alert("no se puede quitar el producto porque su cantidad es cero")
  
console.log(cart);



}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
