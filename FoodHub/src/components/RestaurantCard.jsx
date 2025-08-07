import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/utils";
import { MdStarRate } from "react-icons/md";

const RestaurantCard = ({ restaurantData }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restaurantData?.info;

  return (
    <Link
      to={`/restraunt/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="restaurant-card" style={{ cursor: "pointer" }}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="restaurant-logo"
        />
        <div className="restaurant-details">
          <h3 className="restaurant-name">
            {name.length > 22 ? name.slice(0, 22) + "..." : name}
          </h3>
          <div className="esa-rating">
            <h4 className="rating">
              <MdStarRate className="rating-logo" />
              <span>{avgRating}</span>
            </h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
          </div>
          <p className="cousine">
            {cuisines.join(", ").length > 30
              ? cuisines.join(", ").slice(0, 30) + "..."
              : cuisines.join(", ")}
          </p>
          <p className="location">{areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
