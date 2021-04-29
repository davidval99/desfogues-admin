import React, { Component } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import SelectSearch from "react-select-search";

import "../styles/FAQ.css";

class Prueba extends Component {
  render() {
    return (
      <SelectSearch
        options={options}
        value="sv"
        name="language"
        placeholder="Choose your language"
      />
    );
  }
}

export default Prueba;
