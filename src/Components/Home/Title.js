import React from "react";
import AnimatedTitle from "./AnimatedTitle";

function Title () {
    return <div className = "titleDiv">
        <h1 className="titleH1"> I'm </h1>
        <AnimatedTitle />
        <h1 className="titleH1"> and I'm looking for a job! </h1>
    </div>
}

export default Title;