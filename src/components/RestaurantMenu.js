//now I am importing my useEffect from React Library
//using named import
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
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
        return <Shimmer />
    }
    else {
        
        const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
        
        const { itemCards } = resinfo?.cards[2]?.groupedCard?.REGULAR?.cards[1]?.card?.card;

        const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => 
                c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
            console.log(categories);
        return (
            <div className="menu">
                <h1 className="m-7 text-4xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{name}</h1>
                <p className="mx-7 my-4 text-xl">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <h2 className="mx-7 my-4 text-lg font-semibold">Today's Special Menu</h2>


                <ul className="listOfFood flex-wrap flex">
                    {itemCards.map(item =>
                        <li key={item.card.info.id} className="foodItem">

                            <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100">
                                <img
                                    className="rounded-lg"
                                    src={CDN_URL + item.card.info.imageId}
                                    alt= {item.card.info.name}
                                />
                                <div className="">
                                    <h1 className="font-bold py-4">{item.card.info.name}</h1>
                                    <p className="py-3">{item.card.info.description}</p>
                                    <div className="">
                                        <div className="">
                                            <p>{item.card.info.price / 100} Rs. Only</p>
                                        </div>

                                    </div>
                                    <button className="search-btn bg-red-400 rounded-lg p-3 my-2">Add to Card<i className="fa fa-arrow-right"></i></button>
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