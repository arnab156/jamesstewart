import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
