// Start with 0 items in the cart
let cartQuantity = 0;

// Function to add 1 item
const addOneItem = () => {
  cartQuantity += 1;
  document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items!`;
};

// Function to add 2 items
const addTwoItems = () => {
  cartQuantity += 2;
  document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items!`;
};

// Function to remove 1 item, only if cartQuantity > 0
const removeOneItem = () => {
  if (cartQuantity > 0) {
    cartQuantity -= 1;
    document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} items!`;
  } else {
    document.querySelector('#cart-summary').innerText = `Add items!`;
  }
};
