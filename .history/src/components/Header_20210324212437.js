import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/cbimaLogo.png";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      <header className="header">
        <img className="logoD" src={logo} />
        <div className="header-links">
          <button onClick={() => logout()}>Cerrar Sesión</button>
        </div>
      </header>
    </>
  );
}

export default Header;
