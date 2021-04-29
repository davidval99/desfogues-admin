import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header;";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid-container">
      <Header />
      <>
        <LoginButton />
        <Navbar />
        <LogoutButton />
      </>
    </div>
  );
}

export default App;
