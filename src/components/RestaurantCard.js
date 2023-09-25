import { CDN_URL } from "../utils/constant";
 export const RestaurantCard = (props) => {
    const {resObj} = props;
    const {name, cuisine, rating, cloudnaryimageId} = resObj?.restaurant;
    return (
        
        <div className = "res-card" style={{backgroundColor: "#f0f0f0"}}>
            
            
            <img className="res-logo" alt="random food item" src={CDN_URL} />

            <h3>{name}</h3>
            <h3>{cuisine.join(",")}</h3>
            <h4>{rating}</h4>
           
        </div>
    )
};

export default RestaurantCard;