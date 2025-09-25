import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo-image.png";

export default function Nav() {
  const navigate = useNavigate();

  function navigateToHomePage() {
    navigate("/home");
  }

  return (
    <nav className="nav-bar">
      <img
        className="logo-image"
        src={logoImage}
        alt="Logo Image"
        onClick={() => navigateToHomePage()}
      />
      <Link to="/home" className="nav-buttons">
        HOME
        🏠
      </Link>
      <Link to="/collections" className="nav-buttons">
        COLLECTION
        🛍️
      </Link>
      <Link to="/about" className="nav-buttons">
        ABOUT
        🚹
      </Link>
      <Link to="/contact" className="nav-buttons">
        CONTACT
        📱
      </Link>
      <Link to="/cart" className="nav-buttons">
        CART
        🛒
      </Link>
    </nav>
  );
}
