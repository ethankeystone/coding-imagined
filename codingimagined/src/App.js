import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Explore from "./pages/Explore/Explore"
import AboutUs from "./pages/AboutUs/AboutUs"
import MoreStuff from "./pages/MoreStuff/MoreStuff"
import EvenMoreStuff from "./pages/EvenMoreStuff/EvenMoreStuff"
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/moreStuff" component={MoreStuff}/>
          <Route path="/EvenMoreStuff" component={EvenMoreStuff}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
