import React from "react";
import MenuIcon from "./MenuIcon";
import HelloWorld from "./HelloWorld";
import PostHelloWorld from "./PostHelloWorld";
import codeJoke from "../../filesAndStyles/files/Codejoke.png";

function Home() {
  return (
    <div className="container">
      <MenuIcon />

      <div className="initialFrontPage">
        <HelloWorld/>
        <PostHelloWorld/>

      </div>
    </div>
  );
}

export default Home;
