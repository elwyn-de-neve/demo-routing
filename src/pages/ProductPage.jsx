import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  // Fetch product data from the server based on the id

  return (
    <div className="page-container">
      <h1>Product Details</h1>
      <div className="card">
        <h2>Product {params.id}</h2>
        <p>This is the detail page for product {params.id}.</p>
      </div>
    </div>
  );
};

export default ProductPage;
