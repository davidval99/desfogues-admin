import React, { Component } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import SelectSearch from "react-select-search";

import "../styles/FAQ.css";

class Prueba extends Component {
  render() {
    const options = [
      { name: "Swedish", value: "sv" },
      { name: "English", value: "en" },
      { name: "Brazil", value: "aa" },

      { name: "AA", value: "aa" },
    ];
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
