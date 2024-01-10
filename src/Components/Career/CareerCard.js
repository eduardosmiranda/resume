import React from "react";

function CareerCard (props) {

     
    return <div className="educationCard">
        <div className="educationTopCard">
            <img className = "educationImage" src={props.img} alt="Institution"/>
        </div>
        <div className = "belowImage">
            <p className = "nameOfSchool">{props.schoolName}</p>
            <p className= "nameOfCourse"> {props.courseName} </p>
            <p className = "dates"> {props.dates} </p>
        </div>
    </div>
}

export default CareerCard;