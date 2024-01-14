import React from "react";
import MenuIcon from "../Home/MenuIcon";
import AcademicJourney from "./AcademicJourney";
import Background from "./Background";
import SidebarAbout from "./SidebarAbout";

function About () {

    return <div className="container">
        <MenuIcon/>
        <SidebarAbout />
        <div className="containerAbout">
            <span style={{"--clr":"#eeff00"}}></span>
            <span style={{"--clr":"#00ffdd"}}></span>
            <span style={{"--clr":"#e900d5"}}></span>
            <div className="aboutH1Div">
                <h1 className="aboutH1">
                    Academic Journey
                </h1>
            </div>
        </div>
        <AcademicJourney/>
        <Background/>
    </div>
}

export default About;