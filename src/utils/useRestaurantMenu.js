import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (resId) => {
    //fetch data here
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;

