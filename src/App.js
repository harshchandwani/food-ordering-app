import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
// import { GardenCart } from 'tabler-icons-react';

// - Header

//   - Logo
//   - Nav Items (Home, About, Cart)


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body /> 
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);