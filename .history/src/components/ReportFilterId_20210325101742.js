import React, { Component, useState } from "react";
import { db } from "../database/Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";

class ReportFilterId extends Component {
  constructor() {
    super();

    this.state = {
      id: 1,
      ListReports: [],
      OLOR: "",
      OBSERVACION: "",
      TIPO: "",
      Direccion: "",
      Date_Obs: "",
      Time_Obs: "",
      bandera: true,
      CantonFilter: "AA",
    };
    this.onInputchange = this.onInputchange.bind(this);
  }
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    this.getReports();
  }

  async getReports() {
    let list = [];
    const response = await db.collection("report").where("id", "==", "1").get();
    response.forEach((document) => {
      let id = document.id;
      let OLOR = document.data().OLOR;
      let OBSERVACION = document.data().OBSERVACION;
      let TIPO = document.data().TIPO;
      let Direccion = document.data().Direccion;
      let Date_Obs = document.data().Date_Obs;
      let Time_Obs = document.data().Time_Obs;

      let obj = { id, OLOR, OBSERVACION, TIPO, Direccion, Date_Obs, Time_Obs };
      list.push(obj);
    });
    this.setState({ isLoading: false, ListReports: list });
  }

  handleChange(event) {
    this.setState({ value: event.target.id });
  }

  render() {
    const { items } = this.state;

    const { ListReports, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const reportesList = ListReports.map((report) => {
      return (
        <tr key={report.key}>
          <td style={{ whiteSpace: "nowrap" }}>{report.id}</td>
          <td>{report.OBSERVACION}</td>
          <td>{report.Direccion}</td>
          <td>{report.TIPO}</td>
          <td>{report.OLOR}</td>
          <td>{report.Date_Obs}</td>
          <td>{report.Time_Obs}</td>

          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/customers/" + report.key}
              >
                Marcar como resuleto
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
    return (
      console.log(ListReports),
      (
        <div>
          <Container fluid>
            <div className="float-right">
              <input
                placeholder="Nombre de la Promoción"
                className="form-control mb-2"
              />
              <Button color="success" tag={Link} to="/customers/new">
                Buscar
              </Button>
            </div>
            <h3>Digite el ID del reporte</h3>
            <input
              name="fname"
              type="text"
              value={this.state.fname}
              onChange={this.onInputchange}
            />

            <Table className="mt-4">
              <thead>
                <tr>
                  <th width="20%">Identificador</th>
                  <th width="20%">Observación</th>
                  <th>Dirección</th>
                  <th>Tipo de Aguas</th>
                  <th>Olor</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th width="10%">Acciones</th>
                </tr>
              </thead>
              <tbody>{reportesList}</tbody>
            </Table>
          </Container>
        </div>
      )
    );
  }
}

export default ReportFilterId;