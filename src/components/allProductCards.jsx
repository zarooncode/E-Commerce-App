import { useNavigate } from "react-router-dom";
import allProducts from "../assets/allProducts";
import { setSelectedProduct } from "./getSelecedProduct";

export default function AllProductCards() {
  const navigate = useNavigate();

  function showProduct(product) {
    navigate("/product-info");
    setSelectedProduct(product);
  }

  return (
    <div className="product-card">
      {allProducts.map((product) => (
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
