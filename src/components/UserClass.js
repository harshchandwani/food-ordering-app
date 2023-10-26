import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log("This is a Constructor of Child");
        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy"
            }
        }
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 2 });
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/anuj-thakur-513");
        const json = await data.json();
        this.setState({
            userInfo: json
        });

        console.log(json);
        // console.log("Child Component did mount of Child");
    }
    render(){
        const { name, location, blog } = this.state.userInfo;
        // console.log("Render of Child component");
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h3>Count: {this.state.count}</h3>
                <h2>From: {location}</h2>
                <h2>Site: <a target="_blank" href={blog}>{blog}</a></h2>


                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
};

export default UserClass;