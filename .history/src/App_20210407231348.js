import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReportFetching from "./components/ReportFetching";
import ReportFilterRegion from "./components/ReportFilterRegion";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Prueba from "./components/Prueba";
import ReportFilterId from "./components/ReportFilterId";
import Footer from "./components/Footer";
import ReportFilterWaterType from "./components/ReportFilterWaterType";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <>
            <LoginButton />
          </>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <Header />
          <Navbar />

          <main className="main">
            <div className="content">
              <Route path="/" exact={true} component={ReportFilterId} />
              <Route path="/FilterCanton" component={ReportFilterRegion} />
              <Route path="/FilterType" component={ReportFilterWaterType} />

              <Route path="/GetAll" component={ReportFetching} />
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
