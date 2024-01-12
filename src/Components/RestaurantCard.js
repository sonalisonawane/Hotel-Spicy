import { IMG_CDN_URL } from "../constants";


const RestaurantCard = ({name,avgRating,cuisines,areaName,cloudinaryImageId}) => {
      return (
          <div className="card">
          <img src={IMG_CDN_URL+cloudinaryImageId} alt="card-img"/>
          <h3 className="restaurantName">{name}</h3>
          <span><i class="fa-solid fa-star"></i>{avgRating}</span>
          <h5>{cuisines.join(", ")}</h5>
          <p>{areaName}</p>
         
          </div>
          );
  };
  export default RestaurantCard;