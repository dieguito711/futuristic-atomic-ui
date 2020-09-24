import React from "react";
import "../App/index.css";
import Home from "../../pages/Home";
import Components from "../../pages/Components";
import Experiments from "../../pages/Experiments";
import AboutUs from "../../pages/AboutUs";
import UserDashboard from "../../pages/UserDashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/experiments">
            <Experiments />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/userdashboard">
            <UserDashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
