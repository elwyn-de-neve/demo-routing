import { Link } from "react-router-dom";

const ProductOverviewPage = () => {
  return (
    <div className="page-container">
      <h1>Our Products</h1>
      <p>Browse our selection of top-quality products</p>
      <ul className="product-list">
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductOverviewPage;
