import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(){
        super();
        console.log("This is a Parent Constructor");
    }

    componentDidMount(){
        console.log("This is a Component did Mount of Parent");
    }
    render(){
        console.log("This is Parent Render");
        return (
            <div>
                <h1>This is an About page</h1>
                <User name = {"Harsh Chandwani"}/>
                <UserClass name = {"Bhojraj"}/>
                <UserClass name = {"Nitika"}/>
            </div>
        )
    }
}

export default About;