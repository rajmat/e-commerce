import React from "react";
import "./App.css";

import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">boltom</Link>
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
            <Route path="/product/:id" exact component={ProductScreen} />
            <Route path="/" exact component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights reserved ©</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
