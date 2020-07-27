import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="./index.html">boltom</a>
        </div>
        <div className="header-links">
          <a href="./cart.html">Cart</a>
          <a href="./signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping categories</h3>
        <span>
          <button className="sidebar-close-button" onClick={closeMenu}>
            {"<"}
          </button>
        </span>
        <ul>
          <li>Pants</li>
          <li>Shirts</li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="./product.html">Slim shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="price">$60</div>
                <div className="rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="./product.html">Slim shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="price">$60</div>
                <div className="rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="./product.html">Slim shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="price">$60</div>
                <div className="rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="./product.html">Slim shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="price">$60</div>
                <div className="rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All rights reserved ©</footer>
    </div>
  );
}

export default App;
