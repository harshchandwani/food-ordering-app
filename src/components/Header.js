import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
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
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact uS</li>
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