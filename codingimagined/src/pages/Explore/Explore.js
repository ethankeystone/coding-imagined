import React from "react";
import NavBar from "../Base/NavBar";
import Block from "../Base/Block";
import "../../css/Explore.css";

function Explore() {
    return ( 
        <div>
            <NavBar></NavBar>

            <div className="blocks"> 
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
            </div>
        </div>

    );
}

export default Explore;