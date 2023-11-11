import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
import foodItem from "../Images/foodItem.png"
const ItemList = ({ items, dummy }) => {
   
    const dispatch = useDispatch();
    const handleClick = (item) => {
        //add items
        //dispatch an action
        dispatch(addItems(item));
        //dispatch(addItems("pizza"))
        //goes to reducer function, action.payload == pizza
    }
    return (
        <div>
            <div>
                {items.map((item) => (
                    <div 
                        key={item.card.info.id}
                        className="relative p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                        <div className="py-2">
                            <span className="font-semibold">{item.card.info.name}</span>
                            <span className="font-semibold text-right">
                                - Rs.
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 text-right">
                            
                            <img 
                                className ="w-full " 
                                src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : foodItem}
                            >
                            </img>
                        </div> 
                       
                        <button 
                            onClick = {() => handleClick(item)} //This is useful for handling events in a generic manner when you don't need to pass any additional data.
                            // onClick = {handleClick(item)} //t's not the intended way to set up an event handler in React. If you want to pass the item to the handleClick function, you should use an arrow function or a callback.
                            // onClick = {() => handleClick(item)}//this anonymous function will be executed, and it, in turn, calls the handleClick function with the item as an argument. This is commonly used when you need to pass additional data to the event handler.
                            className="absolute bottom-0 right-0 p-3 bg-black text-white shadow-lg button-1 rounded-md">Add+
                        </button>
                           
                    </div>

                    
                ))}
            </div>
        </div>
    )
}

export default ItemList;