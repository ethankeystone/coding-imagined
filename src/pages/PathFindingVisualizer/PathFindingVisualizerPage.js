import React from "react";
import NavBar from "../Base/NavBar.js";
import PathFindingVisualizer from "./PathFindingVisualizer.js";
import "../../css/PathFindingVisualizer.css";
export default function PathFindingVisualizerPage() {
    return (
            <div className="app">
                <NavBar></NavBar>
                <PathFindingVisualizer></PathFindingVisualizer>
            </div>
        );
}
