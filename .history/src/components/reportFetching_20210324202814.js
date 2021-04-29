import React, { Component, useState } from "react";
import { db } from "../database/Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { BrowserRouter, Route, Link } from "react-router-dom";

class ReportFetching extends Component {
  constructor() {
    super();

    this.state = {
      ListReports: [],
      ESTADO: "",
      OLOR: "",
      OBSERVACION: "",
      bandera: true,
      CantonFilter: "AA",
    };
  }

  componentDidMount() {
    this.getReports();
  }

  async getReports() {
    let list = [];
    const response = await db
      .collection("report")
      .where("OBSERVACION", "==", this.state.CantonFilter)
      .get();
    response.forEach((document) => {
      let id = document.id;
      let ESTADO = document.data().ESTADO;
      let OLOR = document.data().OLOR;
      let OBSERVACION = document.data().OBSERVACION;
      let obj = { id, ESTADO, OLOR, OBSERVACION };
      list.push(obj);
    });
    this.setState({ ListReports: list });
  }

  async deletePromo(Promo) {
    if (window.confirm("Está seguro que desea eliminar la promoción?")) {
      await db.collection("promo").doc(Promo.id).delete();
      alert("Se ha eliminado la promoción exitosamente");
      this.getPromos();
    }
  }

  async getPromo(Promo) {
    const res = await db.collection("report").doc(Promo.id).get();
    this.setState({
      id: res.id,
      name: res.data().ESTADO,
      description: res.data().OLOR,
      image: res.data().OBSERVACION,
      bandera: false,
    });
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
            <a className="navbar-brand" href="/AdvertisementCrud">
              Módulo de administrador de reportes
            </a>
          </div>
        </nav>
        <form className="card m-3 p-2">
          <input
            placeholder="Cantón"
            className="form-control mb-2"
            value={this.state.image}
            onChange={(e) => this.setState({ CantonFilter: e.target.value })}
          />

          <button className="btn btn-dark" onClick={this.getReports()}>
            {"Buscar Reportes"}
          </button>
        </form>

        <ul className="list-group m-3">
          {this.state.ListReports.map((report) => (
            <li className="list-group-item" key={report.id}>
              <p className="font-weight-bold">
                <span>Estado: </span>
                {report.ESTADO}
              </p>
              <p className="font-weight-bold">
                <span>OLOR: </span>
                {report.OLOR}
              </p>
              <p className="font-weight-bold">
                <span>id: </span>
                {report.id}
              </p>

              <div className="d-flex flex-row-reverse">
                <button
                  className="btn btn-secondary ml-2"
                  onClick={this.deletePromo.bind(this, report)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-dark"
                  onClick={this.getPromo.bind(this, report)}
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

export default ReportFetching;
