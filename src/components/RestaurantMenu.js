//now I am importing my useEffect from React Library
//using named import
import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { Key } from "tabler-icons-react";
import { Image, Breathing } from 'react-shimmer'
const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    //we used to fectch data here, but now we have moved all the processing of fecthing the data to a hook called useRestaurantMenu, which is a custom hook!

    //useEffect hook takes 2 arguments and callback function, optinal argument
    // useEffect(() => {
    //      fetchMenu();
    // }, []);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    //     setResInfo(json.data);
    // }

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        <Breathing width={800} height={600}/>
    }
    else {
        
        const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
        
        // const { itemCards } = resInfo?.cards[2]?.groupedCard?.REGULAR?.cards[1]?.card?.card;

        const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => 
                c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
            // console.lo g(categories);
        return (
          <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/*category accordions*/}
            {categories.map((category) => (
             <RestaurantCategory 
                data = {category?.card?.card}/>
            ))}
          </div>  
        );
    }
};

export default RestaurantMenu;