import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Context States
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
// Layout
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
// User
import User from "./components/users/User";
// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
// CSS
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
