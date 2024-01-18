import React from "react";
import MenuIcon from "../Home/MenuIcon";
import CareerEducation from "./CareerEducation";
import CareerPreviousWork from "./CareerPreviousWork";
import Footer from "../Footer/Footer";


function Career () {


    return (
        <div className = "container">
            <MenuIcon />
            <h1 className="educationH1">
                Education
            </h1>

            <CareerEducation />

            <h1 className = "educationH1"> Previous work </h1>

            <CareerPreviousWork />

            <Footer />
        </div>
    )

}

export default Career;