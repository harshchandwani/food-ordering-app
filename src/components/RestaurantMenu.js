//now I am importing my useEffect from React Library
//using named import
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import { CDN_URL } from "../utils/constant";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    //useEffect hook takes 2 arguments and callback function, optinal argument
    useEffect(() => {
         fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setResInfo(json.data);
    }
    

    if(resInfo === null){
        return <Shimmer />
    }
    else{
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
        const itemCards = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        return (
            
            <div className="menu">
                <h1>{name}</h1>
                <p>
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <h2>Menu</h2>
                
                
                <ul className="listOfFood">
                    {itemCards.map(item => 
                        <li key = "id" className="foodItem">
                            
                            <div class="container">
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                alt="Pancake"
                            />
                            <div class="container__text">
                                <h1>{item.card.info.name}</h1>
                                <div class="container__text__star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                </div>
                                <p>{item.card.info.description}</p>
                                <div class="container__text__timing">
                                <div class="container__text__timing_time">
                                <h2>Price</h2>
                                <p>{item.card.info.price / 100}</p>
                                </div>
    
                            </div>
                                <button class="btn">Add to Card<i class="fa fa-arrow-right"></i></button>
                            </div>
                            </div>



                            {/* {item.card.info.name} - Rs {item.card.info.price/100} */}
                        </li>)};
                </ul>
            </div>
        );
    }
};

export default RestaurantMenu;