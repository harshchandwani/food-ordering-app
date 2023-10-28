import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);
  //useEffect (callback function, dependency array)
  //useEffect, when body will render, after render, useEffect will call the callback function.
  //if you want anything to happen after the component is render, put that function in callback function of useEffect

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.694490&lng=76.665092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaraunt(resData);
        setFilteredRestaurants(resData);
      }
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are not connected to the world, Please check your internet connection</h1>
  }
  //conditional Rendering  
  if (listOfRestaurants.length === 0) {
    return <Shimmer />
  }

  const handleSearch = () => {
    // Apply the logic of filtering according to the name
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res?.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-3">
          <input
            type="search"
            className="border border-solid border-black rounded-xl p-2"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>

          <button
            className="search-btn bg-green-100 m-4 px-4 py-2 rounded-lg"
            onClick={handleSearch}
          >Search</button>
          <button
            className="px-4 py-2 border rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">

        {filteredRestaurants.map((restaurant) => (

          <Link key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;