/* Create an array named products which you will use to add all of your product 
object literals that you create in the next step. */


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
   - Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
let productCherry = {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 100,
  image: "images/cherry.jpg"
};
let productStrawberry = {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 101,
  image: "images/strawberry.jpg"
};
let productOrange = {
  name: "Bag of Oranges",
  price: 10,
  quantity: 0,
  productId: 102,
  image: "images/orange.jpg"
};
let products = [productCherry, productStrawberry, productOrange];


/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

//additional function to avoid repetition
function getProductId(productId, productList) {
  return productList.find((product) => product.productId === productId);
}


/* Create a function named addProductToCart that takes in the product productId as an argument
- addProductToCart should get the correct product based on the productId
- addProductToCart should then increase the product's quantity
- if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = getProductId(productId, products);
  product.quantity++;
  if (cart.indexOf(product)=== -1) {
    cart.push(product);
  }
}


/* Create a function named increaseQuantity that takes in the productId as an argument
- increaseQuantity should get the correct product based on the productId
- increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const product = getProductId(productId, products);
  if (cart.includes(product)) {
    product.quantity++;
  } else {
    addProductToCart(productId)
  }
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const product = getProductId(productId, products);
  if (cart.includes(product)) {
    product.quantity--;
    if (product.quantity === 0) {
      removeProductFromCart(productId)
    }
  }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const product = getProductId(productId, products);
  product.quantity = 0;
  cart.splice(cart.indexOf(product), 1);
}


/* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total of all products
- cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  return cart.reduce(productSum,0);
}

function productSum (previousValue, product) {
  return previousValue +  (product.quantity * product.price) ;
}


/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  while (cart.length > 0) {
    cart.pop();
  }
}


/* Create a function named pay that takes in an amount as an argument
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  let total = 0;
  total += amount;
  return total - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
 To fully complete this project, it is expected that all tests pass.
 Run the following command in terminal to run tests
 npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}