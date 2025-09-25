const placeHolderText = <h2>Empty Cart</h2>
let cart = [placeHolderText];

export function setCartToProd(product) {
  cart = [];
  cart.push(product);
}

export function getCartToProd() {
  return cart;
}

export function getCart() {
  return cart;
}
