import React, { Component, useState } from "react";
import { db } from "../database/Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { BrowserRouter, Route, Link } from "react-router-dom";

class AdvertisementCrud extends Component {
  constructor() {
    super();
    this.addPromo = this.addPromo.bind(this);

    this.state = {
      ListPromo: [],
      name: "",
      description: "",
      image: "",
      bandera: true,
    };
  }

  componentDidMount() {
    this.getPromos();
  }

  async getPromos() {
    let list = [];
    const response = await db.collection("promo").get();
    response.forEach((document) => {
      let id = document.id;
      let name = document.data().name;
      let description = document.data().description;
      let image = document.data().image;
      let obj = { id, name, description, image };
      list.push(obj);
    });
    this.setState({ ListPromo: list });
  }

  async addPromo(event) {
    event.preventDefault();
    const { id, name, description, image } = this.state;
    const obj = { name, description, image };
    if (this.state.bandera) {
      await db.collection("reports").add(obj);
      this.getPromos();
      this.setState({ name: "", description: "", image: "" });
      alert("Se ha agregado la promoción exitosamente");
    } else {
      await db.collection("promo").doc(id).update(obj);

      this.getPromos();
      this.setState({
        name: "",
        description: "",
        image: "",
        id: "",
        bandera: true,
      });
      alert("Se ha actualizado la promoción exitosamente");
    }
  }

  async deletePromo(Promo) {
    if (window.confirm("Está seguro que desea eliminar la promoción?")) {
      await db.collection("promo").doc(Promo.id).delete();
      alert("Se ha eliminado la promoción exitosamente");
      this.getPromos();
    }
  }

  async getPromo(Promo) {
    const res = await db.collection("promo").doc(Promo.id).get();
    this.setState({
      id: res.id,
      name: res.data().name,
      description: res.data().description,
      image: res.data().image,
      bandera: false,
    });
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
            <a className="navbar-brand" href="/AdvertisementCrud">
              Módulo de administrador de promociones
            </a>
          </div>
        </nav>
        <form className="card m-3 p-2">
          <input
            placeholder="Nombre de la Promoción"
            className="form-control mb-2"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <input
            placeholder="Descripción de la Promoción"
            className="form-control mb-2"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />

          <input
            placeholder="URL de Imagen"
            className="form-control mb-2"
            value={this.state.image}
            onChange={(e) => this.setState({ image: e.target.value })}
          />

          <button className="btn btn-dark" onClick={this.addPromo}>
            {this.state.bandera ? "Añadir Promoción" : "Editar Promoción"}
          </button>
        </form>

        <ul className="list-group m-3">
          {this.state.ListPromo.map((promo) => (
            <li className="list-group-item" key={promo.id}>
              <p className="font-weight-bold">
                <span>Name: </span>
                {promo.name}
              </p>
              <p className="font-weight-bold">
                <span>Description: </span>
                {promo.description}
              </p>

              <p className="font-weight-bold">
                <span>Imagen: </span>
                <img
                  src={promo.image}
                  width="120px"
                  alt="..."
                  class="img-thumbnail"
                ></img>
              </p>
              <div className="d-flex flex-row-reverse">
                <button
                  className="btn btn-secondary ml-2"
                  onClick={this.deletePromo.bind(this, promo)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-dark"
                  onClick={this.getPromo.bind(this, promo)}
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdvertisementCrud;
