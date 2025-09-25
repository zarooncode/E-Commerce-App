import popUpMan from "../assets/popup-man.png";
import ProductCardLatestCollections from "../components/productCardLatestCollections";
import ProductCardBestSellers from "../components/productCardBestSellers";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-popup-container">
        <div className="home-popup">
          <div className="text-popup">
            <strong style={{ fontSize: "16.4px" }}>——— OUR BEST SELLERS</strong>
            <br />
            <strong
              style={{
                fontSize: "40px",
                fontFamily: "Times New Roman",
                fontWeight: "normal",
              }}
            >
              Latest Arrivals
            </strong>
            <br />
            <strong style={{ fontSize: "16.4px" }}>SHOP NOW ———</strong>
            <br />
          </div>
          <div className="image-container">
            <img className="popup-image" src={popUpMan} alt="Image" />
          </div>
        </div>
      </div>
      <div className="home-latest-collections-text-container">
        <br />
        <br />
        <strong
          className="home-latest-collections-title"
          style={{ fontSize: "18px" }}
        >
          <span style={{ color: "grey" }}>LATEST</span> COLLECTIONS ———
        </strong>
        <br />
        <p
          className="home-latest-collections-info"
          style={{ fontSize: "12px" }}
        >
          Our latest snacks, freshly bought from trusted stores!
        </p>
      </div>
      <div className="home-latest-collections">
        <ProductCardLatestCollections />
      </div>
      <div className="best-sellers-text-container">
        <br />
        <br />
        <strong
          className="best-sellers-collections-title"
          style={{ fontSize: "18px" }}
        >
          <span style={{ color: "grey" }}>BEST</span> SELLERS ———
        </strong>
        <br />
        <p
          className="best-sellers-collections-info"
          style={{ fontSize: "12px" }}
        >
          Our best seller snacks, who doesn't love such snacks! Also freshly bought from trusted stores!
        </p>
      </div>
      <div className="best-sellers-collections">
        <ProductCardBestSellers />
      </div>
    </div>
  );
}
