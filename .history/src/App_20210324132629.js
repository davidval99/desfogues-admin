import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
