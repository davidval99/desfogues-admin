import React, { Component, useState } from "react";
import { db } from "../database/Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { BrowserRouter, Route } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import Select from "react-select";
import cantones from "./cantones";

class ReportFilterRegion extends Component {
  constructor() {
    super();

    this.state = {
      ListReports: [],
      OLOR: "",
      OBSERVACION: "",
      TIPO: "",
      Direccion: "",
      Date_Obs: "",
      Time_Obs: "",
      bandera: true,
      CantonFilter: "Alajuela",
    };
  }

  handleChange = (event) => {
    this.setState({ CantonFilter: event.value });
    console.log(this.state.CantonFilter);
  };

  componentDidMount() {}

  async getReports() {
    let list = [];
    const response = await db
      .collection("report")
      .where("Canton", "==", "Alajuela")
      .get();
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

  render() {
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
              <Button size="sm" color="primary" to={"/customers/" + report.key}>
                Marcar como resuleto
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Container fluid>
          <div className="float-right">
            <button
              disabled={true}
              onClick={this.getReports()}
              color="success"
            ></button>
          </div>
          <h3>Seleccione un cant??n</h3>
          <Select
            onChange={this.handleChange}
            value={this.state.CantonFilter}
            placeholder={"Cantones de Costa Rica"}
            options={cantones}
          />

          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Identificador</th>
                <th width="20%">Observaci??n</th>
                <th>Direcci??n</th>
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
    );
  }
}

export default ReportFilterRegion;
