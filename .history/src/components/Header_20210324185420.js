import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/cbimaLogo.png";

function Header() {
  return (
    <>
      <header className="header">
        <img className="logoD" src="../images/cbimaLogo.png" />
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="Login">Sign In</a>
        </div>
      </header>
    </>
  );
}

export default Header;
