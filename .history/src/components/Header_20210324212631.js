import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/cbimaLogo.png";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";

function Header() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      <header className="header">
        <img className="logoD" src={logo} />
        <div className="header-links">
          <Button onClick={() => logout()} color="success">
            Buscar
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
