import React from "react";
import NavBar from "../Base/NavBar.js";

function Home() {

  return (
      <Base {homePage()}/>
    <div className="App">
        <NavBar></NavBar>
        <div>This is the home page</div>
    </div>
    );

}

export default Home;
