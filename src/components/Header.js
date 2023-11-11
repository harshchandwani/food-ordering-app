import { useEffect, useState, useContext } from "react";
// import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "../Images/logo.png"
const Header = () => {
    // let btnName = "Login";
    //simple variable, will not change UI
    const data = useContext(UserContext);
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    //useState, will render
    //Selector
    //we are subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    useEffect(() => {
        // console.log("Effect called")
    });

    //it will be called, when component is rendered  
    return (
        <div className="flex justify-between shadow-lg" style={{ backgroundColor: "#ffb5b5" }}>
            <div>
                <Link to="/">
                    <img className="w-40" src={logo}></img>
                </Link>
                
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
                    <li className="px-4 font-bold text-xl">
                        <Link to= "/cart">Cart ({cartItems.length} items)</Link> 
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            btnName === "Login"
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                        }}
                    >{btnName}</button>
                    <li className="px-4">
                        {data.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default Header;