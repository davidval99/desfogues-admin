import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReportFetching from "./components/ReportFetching";
import ReportFilter from "./components/ReportFilter";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <Router>
        <div className="grid-container">
          <>
            <LoginButton />
          </>
        </div>
      </Router>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <Header />
          <Navbar />

          <main className="main">
            <div className="content">
              <Route path="/" exact={true} component={ReportFilter} />
              <Route path="/Filter" component={ReportFetching} />
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
