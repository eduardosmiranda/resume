import React from "react";

function SkillsCard (props) {
    return <div className="skillsCard">
        <img className="skillsImage" src={props.ImageSource} alt={props.skill}/>
        
    </div>
}

export default SkillsCard;