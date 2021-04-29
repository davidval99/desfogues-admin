import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">{<img className="logoD" src="./logo.svg" />}</Link>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="Login">Sign In</a>
        </div>
      </header>
    </>
  );
}

export default Header;
