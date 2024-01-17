import React from "react";

function InterestsCard (props) {
    return <div className="InterestsCard">
        <div className="InterestsImageBox">
            <img src = {props.ImageSource} alt={props.ImageAlt} />
        </div>
        <div className="InterestsTextBox">
            <div className="InterestsMainText">
                <span> {props.mainText} </span>
            </div>

        </div>
    </div>
}

export default InterestsCard;