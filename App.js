import React from "react";
import ReactDOM from "react-dom/client";
// import { GardenCart } from 'tabler-icons-react';

// - Header

//   - Logo
//   - Nav Items (Home, About, Cart)
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?w=826&t=st=1695013308~exp=1695013908~hmac=a278336d91250224cc3a981983f766e16c0ef3168f73090acc2cc7f609e857e9"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact uS</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);