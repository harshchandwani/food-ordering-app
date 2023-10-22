import { useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Name: {props.name}</h1>
            <h3>Count: {count}</h3>
            <h2>Twitter: heyy_harshh</h2>
            <button onClick={() => {setCount(count + 1)}}>Increase</button>
        </div>
    )
}

export default User;