import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarAdmin.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbarAdmin">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links">
              {" "}
              Buscar por ID
            </a>
          </li>
          <li className="nav-item">
            <a href="/FilterCanton" className="nav-links">
              {" "}
              Filtrar Por Cantón
            </a>
          </li>
          <li className="nav-item">
            <a href="/FilterType" className="nav-links">
              {" "}
              Filtrar Por Tipo
            </a>
          </li>
          <li className="nav-item">
            <a href="/GetAll" className="nav-links">
              {" "}
              Todos los reportes
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
