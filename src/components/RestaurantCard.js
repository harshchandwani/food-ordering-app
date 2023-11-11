import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="my-3 font-bold">{avgRating} stars</h4>
      <h4 className=" py-4">{costForTwo}</h4>
      {/* <h4>{deliveryTime} minutes</h4> */}
    </div>
  );
};


//Higher Order Component 
//take component (Restaurant Card)
//enhance it 
//return modiffy component (Promoted Restaurant Card)
//input - Restaurant ===>>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
};
//this is a higher order component

export default RestaurantCard;