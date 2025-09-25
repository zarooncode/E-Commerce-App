import AllProductCards from "../components/allProductCards";

export default function CollectionPage() {
  return (
    <div className="collections-page">
      <div className="collections-title-container">
        <strong style={{fontSize: "18px"}}>
          <span style={{color: "gray", fontSize: "18px"}}>ALL</span> COLLECTIONS ———
        </strong>
      </div>
      <div className="all-products">
        <AllProductCards />
      </div>
    </div>
  );
};
