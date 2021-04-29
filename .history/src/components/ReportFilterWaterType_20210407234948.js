import React, { Component, useState } from "react";
import { db } from "../database/Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { BrowserRouter, Route } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import Select from "react-select";
import tiposagua from "./tiposagua";

class ReportFilterRegion extends Component {
  constructor() {
    super();

    this.state = {
      ListReports: [],
      OLOR: "",
      OBSERVACION: "",
      tipos: "",
      Direccion: "",
      Date_Obs: "",
      Time_Obs: "",
      bandera: true,
      selectedOption: "Alajuela",
    };
  }

  handleDropdown(selectedOption) {
    this.clearBoxes();
    this.setState({
      selectedOpt: selectedOption,
      textOne: selectedOption.label,
    });
  }

  handleChange = (selectedOption) => {
    this.setState(
      { selectedOption },
      () => this.getReports(),
      console.log(`Option selected:`, this.state.selectedOption.value)
    );
  };

  async getReports() {
    let list = [];
    if (this.state.selectedOption.value != undefined) {
      const response = await db
        .collection("report")
        .where("Canton", "==", this.state.selectedOption.value)
        .get();
      response.forEach((document) => {
        let id = document.id;
        let OLOR = document.data().OLOR;
        let OBSERVACION = document.data().OBSERVACION;
        let tipos = document.data().tipos;
        if (document.data().tipos != undefined) {
          tipos = document.data().tipos.toString();
        }
        let Direccion = document.data().Direccion;
        let Date_Obs = document.data().Date_Obs;
        let Time_Obs = document.data().Time_Obs;

        let obj = {
          id,
          OLOR,
          OBSERVACION,
          tipos,
          Direccion,
          Date_Obs,
          Time_Obs,
        };
        list.push(obj);
      });
      this.setState({ isLoading: false, ListReports: list });
    }
  }

  render() {
    const { selectedOption } = this.state;

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
          <td>{report.tipos}</td>
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
          <h3>Seleccione el tipo de desfogue</h3>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            handleDropdown={this.handleDropdown}
            placeholder={"Tipos"}
            options={tiposagua}
          />

          <h3>Reportes de tipo {this.state.selectedOption.value} :</h3>

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
    );
  }
}

export default ReportFilterRegion;
