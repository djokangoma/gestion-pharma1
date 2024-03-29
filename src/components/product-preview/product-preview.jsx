/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

function ProductPreview({ product, seeMore }) {
  return (
    <div>
      <img src={product.image} alt="product image" />
      <h2>{product.name} </h2>

      {seeMore ? (
        <p>{product.description}</p>
      ) : (
        <Link to={`/products/${product.id}`}>voir plus</Link>
      )}
    </div>
  );
}
export default ProductPreview;
