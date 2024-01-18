import React from "react";
import Title from "./Title";
import MyPhoto from "./MyPhoto";
import CodeJoke from "./CodeJoke";

function PostHelloWorld () {
    return <div className="postHelloWorld">
        <div className ="titleAndPhoto">
            <MyPhoto/>
            <Title/>
        </div>
        <CodeJoke/>
    </div>
}

export default PostHelloWorld;