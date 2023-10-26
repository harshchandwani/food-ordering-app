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
                        <li key={item.card.info.id} className="foodItem">

                            <div className="container">
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    alt="Pancake"
                                />
                                <div className="container__text">
                                    <h1>{item.card.info.name}</h1>
                                    <div className="container__text__star">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <p>{item.card.info.description}</p>
                                    <div className="container__text__timing">
                                        <div className="container__text__timing_time">
                                            <h2>Price</h2>
                                            <p>{item.card.info.price / 100}</p>
                                        </div>

                                    </div>
                                    <button className="btn">Add to Card<i className="fa fa-arrow-right"></i></button>
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