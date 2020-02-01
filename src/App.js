import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Base from "./pages/Base/Base";
import Explore from "./pages/Explore/Explore";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import PathFindingVisualizerPage from "./pages/PathFindingVisualizer/PathFindingVisualizerPage";

export default function App() {
    return (
            <div className="App">
                <Base>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={AboutUs}/>
                            <Route path="/explore" component={Explore}/>
                            <Route path="/PathFindingVisualizer" component={PathFindingVisualizerPage}/>
                        </Switch>
                    </Router>
                </Base>
            </div>
        );
}
