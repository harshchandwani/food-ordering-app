import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 2});
    }
    render(){
        return (
            <div className="user-card">
                <h1>Name: {this.props.name}</h1>
                <h3>Count: {this.state.count}</h3>
                <h2>Twitter: heyy_harshh</h2>

                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
};

export default UserClass;