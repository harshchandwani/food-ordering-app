import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        //show and hide
        showItems == true? setShowItems(false): setShowItems(true);
    }
    return (
        <div>
            { /* Header*/}
            <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <div className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </div>
                    <span>⬇️</span>
                </div>
                 {/* Accodian Body*/}
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;