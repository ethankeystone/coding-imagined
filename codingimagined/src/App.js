import React from "react";
import logo from "./codinglogo.svg";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Explore from "./Explore"
import AboutUs from "./AboutUs"
import MoreStuff from "./MoreStuff"
import EvenMoreStuff from "./EvenMoreStuff"
import Error from "./Error";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/explore" component={Explore}/>
          <Route exact path="/moreStuff" component={MoreStuff}/>
          <Route exact path="/EvenMoreStuff" component={EvenMoreStuff}/>
          <Route path ="/" component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
