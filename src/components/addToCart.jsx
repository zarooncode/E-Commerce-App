import { setCartToProd } from "./setCart.jsx";
import { getSelectedProduct } from "./getSelecedProduct.jsx";
import { setPrice } from "./setPrice.jsx";
import { useNavigate } from "react-router-dom";

export default function AddToCartButton() {
  let product = getSelectedProduct();
  const navigate = useNavigate();

  function openPage() {
    navigate("/contact");
  }
  function setProduct() {
    setCartToProd(
      <div className="cart">
        <strong className="cart-name">Product Name: {product.name} </strong>
        <p className="product-price">Price: {product.price}</p>
        <img className="cart-image" src={product.image} alt="Product Image" />
        <br />
        <button className="cart-buy-button" onClick={() => openPage()}>Buy Product</button>
      </div>
    );
    setPriceToProduct();
  }
  function setPriceToProduct() {
    setPrice(product);
  }

  return (
    <button className="addtocard-button" onClick={() => setProduct()}>
      ADD TO CART
    </button>
  );
}
