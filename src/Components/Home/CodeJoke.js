import React from "react";

function CodeJoke () {
    return <div className="codeJoke">
            <p className="pCodeJoke"> class <span id="Eduardo"> Eduardo </span> { '{' } </p>
            <p className="pCodeJoke constructorIndentation"> <span id="constructor"> constructor </span>  {'() {'} </p>
            <p className="pCodeJoke thisIndentation"><span className="this">this.</span>fullname = <span id="red">"Eduardo da Silva Miranda"</span>;</p>
            <p className="pCodeJoke thisIndentation"><span className="this">this.</span>skills = <span id="red"> {'['}"ReactJS"</span>, <span id="red"> "NodeJS"</span>, <span id="red"> "HTML5"</span>, <span id="red"> "CSS3"</span>, <span id="red"> "PostgreSQL"</span>, <span id="red"> "APIs {'(Rest)'}" {']'}</span>;</p>
            <p className="pCodeJoke thisIndentation"><span className="this">this.</span>role = <span id="red">"Full-Stack Web Developer"</span>;</p>
            <p className="pCodeJoke thisIndentation"><span className="this">this.</span>availability = <span id="red">"READY!"</span>;</p>
            <p className="pCodeJoke constructorIndentation">{'}'}</p>
            <p className="pCodeJoke">{'}'}</p>
    </div>
}

export default CodeJoke;