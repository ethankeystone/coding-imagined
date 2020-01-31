import React from "react";
import NavBar from "../pages/Base/NavBar.js";
import PathFindingVisualizer from "./PathFindingVisualizer.js";
function PathFindingVisualizerPage() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <PathFindingVisualizer></PathFindingVisualizer>
    </div>
    );
}

export default PathFindingVisualizerPage;