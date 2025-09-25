import { getCartToProd } from "../components/setCart";
import { getPrice } from "../components/setPrice";

export default function CartPage() {
  const product = getCartToProd();
  const price = getPrice();
  // const shippingFee = 12;
  // const subTotal = price;
  // const total = subTotal + shippingFee;

  return (
    <div className="cart-page">
      <div className="title-container">
        <strong className="title" style={{ fontSize: "18px" }}>
          <span style={{ color: "grey", fontSize: "18px" }}>YOUR</span> CART ———
        </strong>
        <p>{product}</p>
      </div>
      {/* <div className="cart-total-container">
        <strong className="cart-total-title" style={{ fontSize: "18px" }}>
          <span style={{ color: "grey", fontSize: "18px" }}><span style={{color: "black"}}>(WIP)</span> CART</span> TOTALS
          ———
        </strong>
        <p style={{ fontSize: "14px" }}>Subtotal: SAR 0</p>
        <p style={{ fontSize: "14px" }}>Shipping Fee: SAR 12</p>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>Total: SAR 0</p>
      </div> */}
    </div>
  );
}
