import React from "react";
import MenuIcon from "./MenuIcon";
import myPhoto from "../../filesAndStyles/files/1698160382462.jpg"

function Home() {
  return (
    <div className="container">
      <MenuIcon />

      <div className="initialFrontPage">
        <div className="neurophormism">
          <div className="helloWorld">
            <h1 id="hello">Hello, World!</h1>
          </div>
        </div>

        <div className="postHelloWorld">
          <img src={myPhoto} alt="My photo" />
          <br />
          <h1>
            My name is Eduardo, <br />
            and I'm a full-stack web developer <br />
            <span id="jokeHeading">(or trying to be!)</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
