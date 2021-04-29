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

  return (
    <BrowserRouter>
      <Route path="/" component={ReportFetching} />
      <Route path="/UserPurchasesPaid" component={ReportFilter} />
      <div className="grid-container">
        <Header />
        <Navbar />

        <main className="main">
          <div className="content"></div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
