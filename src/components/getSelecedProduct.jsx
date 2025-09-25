let selectedProduct = [];

export function setSelectedProduct(product) {
  selectedProduct = product;
  return selectedProduct;
}

export function getSelectedProduct() {
  return selectedProduct;
}
