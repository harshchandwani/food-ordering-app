import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    
    return (
        <div>
            { /* Header*/}
            <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
                <div className="flex justify-between">
                    <div className="font-bold text-lg">
                        {data.title} {data.itemCards.length}
                    </div>
                    <span>⬇️</span>
                </div>
                 {/* Accodian Body*/}
                <ItemList items = {data.itemCards}/>
            </div>
        </div>
    );
};

export default RestaurantCategory;