import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReportFetching from "./components/ReportFetching";
import ReportFilter from "./components/ReportFilter";

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
      <Switch>
        <Route path="/" component={ReportFetching} />
        <Route path="/filter" component={ReportFilter} />
      </Switch>
    );
  }
}

export default App;
