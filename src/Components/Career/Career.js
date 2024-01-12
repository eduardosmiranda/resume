import React from "react";
import MenuIcon from "../Home/MenuIcon";
import CareerEducation from "./CareerEducation";
import CareerPreviousWork from "./CareerPreviousWork";

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
        </div>
    )

}

export default Career;