import React from "react";
import MenuIcon from "./MenuIcon";
import HelloWorld from "./HelloWorld";
import PostHelloWorld from "./PostHelloWorld";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <div className="container">

      <MenuIcon />

      <div className="initialFrontPage">
        <HelloWorld/>

        <PostHelloWorld/>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
