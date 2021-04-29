import React, { useState } from "react";
import "./App.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  const [selected, setSelected] = useState("Faculty");

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>

              {/* Start*/}
              <select
                defaultValue={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="Test">Student</option>
                <option value="Hello">Faculty</option>
              </select>
              {/* end*/}

              <p>
                Don't have a account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              {/* Start*/}
              <select
                defaultValue={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="Test">Student</option>
                <option value="Hello">Faculty</option>
              </select>{" "}
              {/* end*/}
              <p>
                Have and account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
