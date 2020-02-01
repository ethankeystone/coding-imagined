import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import AboutUs from "./pages/AboutUs/AboutUs";
import MoreStuff from "./pages/MoreStuff/MoreStuff";
import EvenMoreStuff from "./pages/EvenMoreStuff/EvenMoreStuff";
import Home from "./pages/Home/Home";
import PathFindingVisualizerPage from "./PathFindingVisualizer/PathFindingVisualizerPage";

function App() {
    return (
            <div className="App">
                <Base>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={AboutUs}/>
                            <Route path="/explore" component={Explore}/>
                            <Route path="/moreStuff" component={MoreStuff}/>
                            <Route path="/EvenMoreStuff" component={EvenMoreStuff}/>
                            <Route path="/PathFindingVisualizer" component={PathFindingVisualizerPage}/>
                        </Switch>
                    </Router>
                </Base>
            </div>
        );
}

export default App;
