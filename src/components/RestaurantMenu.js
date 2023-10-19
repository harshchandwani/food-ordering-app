//now I am importing my useEffect from React Library
//using named import
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    //useEffect hook takes 2 arguments and callback function, optinal argument
    useEffect(() => {
         fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9006311&lng=75.923534&restaurantId=79636&submitAction=ENTER");
        const json = await data.json();
        const arrayOfCards = json.data.cards
        console.log(json.data.cards[0].card.card.info.name);
        setResInfo(json.data.cards[0].card.card.info);
    }

    // if(resInfo === null){
    //     return <Shimmer />
    // }

    // OR 

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;