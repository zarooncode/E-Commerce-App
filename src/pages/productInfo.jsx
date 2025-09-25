import { getSelectedProduct } from "../components/getSelecedProduct";
import AddToCartButton from "../components/addToCart";
import HomePage from "./home";

export default function ShowProductInfoPage() {
  const product = getSelectedProduct();

  if (!product) {
    return (
      <p>
        Loading
        <br /> If not loaded, go back to Home Page and Do not refresh the page
        in Info of Product.(refreshing may cause errors)
      </p>
    );
  }

  return (
    <div className="product-info-page">
      <div className="product-info">
        <img
          className="product-info-image"
          src={product.image}
          alt="Product Image"
        />
        <h1 className="name">{product.name}</h1>
        <h2 className="price">{product.price}</h2>
        <p className="ratings">
          ⭐⭐⭐⭐<span style={{ opacity: "0.4" }}>⭐</span> (8)
        </p>
        <p className="info">
          Tasty snack to feast on, for prices cheaper then market price and retail price!
        </p>
        <strong className="stock">Item/Product Stock: {product.stock}</strong>
        <br />
        <br />
        <AddToCartButton />
      </div>
    </div>
  );
}
