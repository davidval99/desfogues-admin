import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../styles/NavbarAdmin.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/ProductCrud" className="nav-links">
              {" "}
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a href="/PromoCrud" className="nav-links">
              {" "}
              Promociones
            </a>
          </li>
          <li className="nav-item">
            <a href="/AdvertisementCrud" className="nav-links">
              {" "}
              Anuncios
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
