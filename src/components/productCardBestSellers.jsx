import { useNavigate } from "react-router-dom";
import productsBestSellers from "../assets/productsBestSellers";
import { setSelectedProduct } from "./getSelecedProduct";

export default function ProductCardBestSellers() {
  const navigate = useNavigate();

  function showProduct(product) {
    navigate("/product-info");
    setSelectedProduct(product);
  }

  return (
    <div className="product-card">
      {productsBestSellers.map((product) => (
        <div key={product.id}>
          <img
            className="product-image"
            onClick={() => showProduct(product)}
            src={product.image}
            alt="Product Image"
          />
          <h3 id="product-name">{product.name}</h3>
          <h4>{product.price}</h4>
        </div>
      ))}
    </div>
  );
}
