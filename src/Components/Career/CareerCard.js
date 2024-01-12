import React from "react";

function CareerCard (props) {

     
    return <div className="educationCard">
        <div className="cardContent front">
            <div className="educationTopCard">
                <img className = "educationImage" src={props.img} alt="Institution"/>
            </div>
            <div className = "belowImage">
                <div className = "schoolanddates">
                    <p className = "nameOfSchool">{props.schoolName}</p>
                    <p className = "dates"> {props.dates} </p>
                </div>

                <p className= "nameOfCourse"> {props.courseName} </p>
            </div>
        </div>
        <div className="back">
            <h3 id="skillsH3">
                Skills gained:
            </h3>

            {props.skills && Array.isArray(props.skills) && props.skills.length > 0 ? (
            <ul className="skillsList">
                {props.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
            ) : (
            <p>No skills available</p>
            )}
        </div>
    </div>
}

export default CareerCard;