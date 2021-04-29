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

  useEffect(() => {
    authListener();
  }, []);

  const handleLogin = () => {
    fire.auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    fire.auth.signOut();
  };
  const authListener = () => {
    fire.auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
