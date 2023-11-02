//now I am importing my useEffect from React Library
//using named import
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const dummy = "Dummy Data";
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    //we used to fectch data here, but now we have moved all the processing of fecthing the data to a hook called useRestaurantMenu, which is a custom hook!
    if (resInfo === null) {
    }
    else {
        const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
        const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        return (
            <div className="text-center">
                <h1 className="font-bold my-10 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
                {/*category accordions*/}
                {categories.map((category, index) => (
                    //this is a controlled component
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems = {index === showIndex ? true : false} //this is telling the component, if the data should be showed or not
                        setShowIndex = {() => setShowIndex(index)} //this is a function, which helps us update the index from child component in the parent component
                        dummy = {dummy}
                    />
                ))}
            </div>
        );
    }
};

export default RestaurantMenu;