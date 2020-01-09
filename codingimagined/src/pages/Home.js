import React from "react";
import NavBar from "../NavBar";
import PathFindingVisualizer from "../PathFindingVisualizer/PathFindingVisualizer.js";
function Home() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <PathFindingVisualizer></PathFindingVisualizer>
    </div>
    );
}

export default Home;