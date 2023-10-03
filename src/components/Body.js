import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  useEffect(() => {
    
    fetchData();

  }, []);
  //useEffect (callback function, dependency array)
  //useEffect, when body will render, after render, useEffect will call the callback function.
  //if you want anything to happen after the component is render, put that function in callback function of useEffect
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.001213&lng=75.9608385&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";
    
    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
        cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestraunt(resData);
        // setFilteredRestaurant(resData);
      }
    }
  };
  
  
  
  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.001213&lng=75.9608385&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   
  //   const json = await data.json();
  //   console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  //   setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   //can we call this swiggy api?
    
  // }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
      
       {listOfRestaurants.map((restaurant) => (
          <RestaurantCard   
            key={restaurant?.info.id} 
            resData={restaurant} 
          />
        ))}
      </div>
    </div>
  );
};

export default Body;