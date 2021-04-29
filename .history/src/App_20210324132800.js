import "./App.css";
import React, { useState, useEffect } from "react";
import fire from "./database/Firebase";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const handleLogin = () => {
    fire.auth.signInWithEmailAndPassword(email, password).catch((err) => {});
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
