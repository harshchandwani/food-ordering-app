import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const User = (props) => {
    const [info, setInfo] = useState(null);
    const [count, setCount] = useState(0);
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const data = await fetch("https://api.github.com/users/harshchandwani");
                const json = await data.json();
                console.log(json);
                setInfo(json);
            }catch(error){
                console.log("Error " ,error);
            }
        }
        fetchData();
    }, []);
    

    if(info == null){
        return <Shimmer/>
    }
    else{
        const {name, location, twitter_username} = info;
        return (
       
            <div className="user-card">
                <h1>Name: {name}</h1>
                {/* <h3>Count: {}</h3> */}
                <h2>Location: {location}</h2>
                <h2>Twitter: {twitter_username}</h2>
                <button onClick={() => {setCount(count + 1)}}>Increase</button>
            </div>
        )
    }
    
}

export default User;