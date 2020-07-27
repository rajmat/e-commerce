import React from "react";

import { Link } from "react-router-dom";

import { data } from "../data";

const HomeScreen = (props) => {
  return (
    <ul className="products">
      {data.products.map((product, index) => (
        <li key={index}>
          <div className="product">
            <Link to={`/product/${product._id}`}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>

            <div className="product-name">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="price">{product.price}</div>
            <div className="rating">
              {product.rating} Stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;
