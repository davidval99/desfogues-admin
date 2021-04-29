import React, { Component, useState } from "react";
import { db } from "../database/Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";

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
      .collection("report").
      .get();
    response.forEach((document) => {
      let id = document.id;
      let ESTADO = document.data().ESTADO;
      let OLOR = document.data().OLOR;
      let OBSERVACION = document.data().OBSERVACION;
      let obj = { id, ESTADO, OLOR, OBSERVACION };
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
          <td style={{ whiteSpace: "nowrap" }}>{report.ESTADO}</td>
          <td>{report.OLOR}</td>
          <td>{report.id}</td>

          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/customers/" + report.key}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.remove(report.key)}
              >
                Delete
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
              <Button color="success" tag={Link} to="/customers/new">
                Add Customer
              </Button>
            </div>
            <h3>Customer List</h3>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th width="20%">Firstname</th>
                  <th width="20%">Lastname</th>
                  <th width="10%">Age</th>
                  <th>Address</th>
                  <th>Copyrightby</th>
                  <th width="10%">Actions</th>
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

export default ReportFetching;
