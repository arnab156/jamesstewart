import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Projects from "./Pages/Project/Project";
import Navbar from "./Pages/Nav/Nav";
import CV from "./Pages/CV/CV";
import Edu from "./Pages/Education/Edu";
import Presentation from "./Pages/Presentation/Presentation";
import ProfesionalAff from "./Pages/Professional/Professional";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/projects" component={Projects} /> */}
        <Route  path="/experience" component={CV} />
        <Route  path="/education" component={Edu} />
        <Route  path="/presentations" component={Presentation} />
        <Route  path="/proaff" component={ProfesionalAff} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
