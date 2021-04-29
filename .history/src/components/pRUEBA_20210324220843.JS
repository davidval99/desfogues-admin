import React, { Component } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

import "../styles/FAQ.css";

class Prueba extends Component {
  render() {
    return (
      <div className="items">
        <div>
          <ul>
            <div>
              <h1 className="h1">Preguntas Frecuentes</h1>
            </div>

            <div>
              <img
                className="image-h"
                src="/images/collares.jpg"
                alt="autor"
                width="350"
                height="450"
              />
            </div>
          </ul>
        </div>
        <div className="parrafo-h">
          <ul>
            <div>
              <h3>¿Con cuáles métodos de pago cuentan?</h3>
              <p>
                Podrás hacer tus pagos con SINPE Móvil, transferencia o
                efectivo.
                <br />
                <br />
              </p>

              <h3>¿Qué métodos de envío utilizan?</h3>
              <p>
                Nuestros envíos se realizan mediante correos de Costa Rica, una
                vez que realizas tu compra se te entrega un código con el que
                podrás seguir tu paquete. El envío tiene un costo de 2500 en el
                GAM y un costo de 3300 a zonas que se encuentren fuera del GAM.
              </p>
              <h3>¿Qué sucede si recibo un producto defectuoso?</h3>
              <p>
                La calidad de los artículos que enviamos es primordial para
                nosotros, por eso, en DV outfits revisamos cada envío
                cuidadosamente para asegurarnos de que los artículos te lleguen
                en perfectas condiciones. Si a pesar de ello, recibes un
                artículo defectuoso, escríbenos a través de nuestro formulario
                de contacto. Estudiaremos tu caso detenidamente y te ofreceremos
                una solución adaptada.
              </p>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Prueba;
