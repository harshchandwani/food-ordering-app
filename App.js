import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (

    <h1> Hey there this is a title</h1>
);

const HeadingComponent = () => (

    <div className="heading" id="container">
        <h1>Hello world from React Functional Component</h1>
        <Title></Title>

    </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);