import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    // let btnName = "Login";
    //simple variable, will not change UI

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //useState, will render
    const handleClick = () => {
        if(btnName == "Login"){
            setBtnName("Logout");
        }
        else{
            setBtnName("Login");
        }
    }


    useEffect(() => {
        // console.log("Effect called")
    });

    //it will be called, when component is rendered  
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div>
                <img className="w-20" src= {LOGO_URL}></img>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus? "✅" : "❌"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to ="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        Cart
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            // btnName = "Logout"
                            // setBtnName("Logout")
                            handleClick()
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;