const productPrice = [];

export function setPrice(product) {
  productPrice.push(product.price);
}

export function getPrice() {
  return productPrice;
}
