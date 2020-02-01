import React from "react";
import NavBar from "../Base/NavBar.js";
import PathFindingVisualizer from "./PathFindingVisualizer.js";

export default function PathFindingVisualizerPage() {
    return (
            <div className="App">
                <NavBar></NavBar>
                <PathFindingVisualizer></PathFindingVisualizer>
            </div>
        );
}
