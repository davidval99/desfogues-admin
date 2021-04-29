import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4>Soporte</h4>
            <ui className="list-unstyled">
              <dt>Teléfono: +506 61297838</dt>
              <br></br>
              <dt>E-mail: davidvalverde99@gmail.com</dt>
              <br></br>
              <a href="Contact">Enviar mensaje</a>
            </ui>
          </div>
          {/* Column2 */}
          <div className="column">
            <ui className="list-unstyled"></ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CBIMA| Derechos Reservados |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
