import React from "react";
import "./css/App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Explore from "./pages/Explore"
import AboutUs from "./pages/AboutUs"
import MoreStuff from "./pages/MoreStuff"
import EvenMoreStuff from "./pages/EvenMoreStuff"
import Error from "./pages/Error";
import Home from "./pages/Home";

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
