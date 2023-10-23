import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
    // let btnName = "Login";
    //simple variable, will not change UI

    const [btnName, setBtnName] = useState("Login");
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
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
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