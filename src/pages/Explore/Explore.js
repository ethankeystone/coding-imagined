import React from "react";
import NavBar from "../Base/NavBar";
import Block from "./Block";
import "../../css/Explore.css";

function Explore() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="blocks">
                <Block
                    link="/PathFindingVisualizer"
                    title="Path Finding Visualizer"
                    paragragh="This is a pathfinding visualzer that attempts to display the ability
                    of several algorthms. Some included are Dijstrikas, AStar, and other funs things!
                    "
                ></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
            </div>
        </div>

    );
}

export default Explore;
