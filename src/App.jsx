import "./App.css";
import { BrowserRouter as MainRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CollectionPage from "./pages/collection";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import CartPage from "./pages/cart";
import Nav from "./components/navBar";
import ShowProductInfoPage from "./pages/productInfo";

function App() {
  return (
    <MainRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-info" element={<ShowProductInfoPage />} />
      </Routes>
    </MainRouter>
  );
}

export default App;
