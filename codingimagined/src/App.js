import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Explore from "./pages/Explore"
import AboutUs from "./pages/AboutUs"
import MoreStuff from "./pages/MoreStuff"
import EvenMoreStuff from "./pages/EvenMoreStuff"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/about'} component={AboutUs}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/moreStuff" component={MoreStuff}/>
          <Route path="/EvenMoreStuff" component={EvenMoreStuff}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
