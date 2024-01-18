import React from "react";
import MenuIcon from "../Home/MenuIcon";
import AcademicJourney from "./AcademicJourney";
import Background from "./Background";
import SidebarAbout from "./SidebarAbout";
import Interests from "./Interests";
import Skills from "./Skills";
import Me from "./Me";
import Footer from "../Footer/Footer";

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
                    Me
                </h1>
            </div>
        </div>
        <Me/>
        <div className="containerAbout">
            <span style={{"--clr":"#eeff00"}}></span>
            <span style={{"--clr":"#00ffdd"}}></span>
            <span style={{"--clr":"#e900d5"}}></span>
            <div className="aboutH1Div">
                <h1 className="aboutH1">
                    Skills
                </h1>
            </div>
        </div>
        <Skills />

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


        <div className="containerAbout">
            <span style={{"--clr":"#eeff00"}}></span>
            <span style={{"--clr":"#00ffdd"}}></span>
            <span style={{"--clr":"#e900d5"}}></span>
            <div className="aboutH1Div">
                <h1 className="aboutH1">
                    Interests
                </h1>
            </div>
        </div>
        <Interests />


        <Background/>
        <Footer />
    </div>
}

export default About;