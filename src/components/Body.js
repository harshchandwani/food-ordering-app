import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    let listOfRestaurant = [
        {
            restaurant: {
                id: 1,
                cloudnaryimageId: "jrrxcxw1yvw9yitglfpt",
                name: "Meghana Food",
                location: "Bengaluru",
                cuisine: ["Biryani", "Roti", "Paratha"],
                rating: 4.8,
                deliveryTime: 39,
                logo:
                "https://media-asserts.swiggy.com/swiggy/image/upload/fl-lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
                offers: [
                {
                    title: "50% off on Kebabs",
                    description: "Enjoy 50% off on all Kebab orders today",
                    code: "KEBAB50",
                },
                ],
            } 
        },
        {
          restaurant: {
            id: 2,
            cloudnaryimageId: "jrrxcxw1yvw9yitglfpt",
            name: "Meghana Food",
            location: "Bengaluru",
            cuisine: ["Biryani", "Roti", "Paratha"],
            rating: 3,
            deliveryTime: 39,
            logo:
              "https://media-asserts.swiggy.com/swiggy/image/upload/fl-lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
            offers: [
              {
                title: "50% off on Kebabs",
                description: "Enjoy 50% off on all Kebab orders today",
                code: "KEBAB50",
              },
            ],
          },
        }
    ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=> {
                        console.log("Button clicked")
                        listOfRestaurant = listOfRestaurant.filter(res => res.restaurant.rating > 4);
                        console.log(listOfRestaurant);    
                    }
                        
                    }
                     
                
                >Top-Rated Restaurant</button>
            </div>

            <div className="res-container">
                { listOfRestaurant.map((restaurant) =>(
                    <RestaurantCard key= {restaurant.restaurant.id} resData = {restaurant}/>
                ))}

            </div>
        </div>
    )
};
export default Body;