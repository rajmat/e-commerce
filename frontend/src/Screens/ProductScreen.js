import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  console.log(props.match.params.id);

  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews}) Reviews
            </li>
            <li>{product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              Price: ${product.price}
            </li>
            <li>
              Status: {product.status}
            </li>
            <li>
              Quantity: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button primary">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
