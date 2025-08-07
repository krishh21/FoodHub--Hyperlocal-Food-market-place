import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); // show 10 initially
  const [loading, setLoading] = useState(true);

  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9993217&lng=73.79001880000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
console.log(json)
    const cards = json?.data?.cards;
    const restaurantDataCard = cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantDataCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
    setLoading(false);
  };

  // Handle search
  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    setVisibleCount(10); // reset visible count
  };

  // Handle "Top Rated"
  const handleTopRated = () => {
    const filtered = allRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
    setVisibleCount(10);
  };

  // Handle "Show More"
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      {/* Search Bar */}
      <div className="search-box" style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <input
          type="text"
          placeholder="Search restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: "8px", flex: "1", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <CiSearch
          className="search-icon"
          size={28}
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Filter */}
      <div className="filter" style={{ padding: "10px" }}>
        <button
          className="filter-btn"
          onClick={handleTopRated}
          style={{
            backgroundColor: "#f97316",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "10px" }}>
    {filteredRestaurants.slice(0, visibleCount).map((restaurant) => (
  <div key={restaurant.info.id} style={{ width: "23%" }}>
    <RestaurantCard restaurantData={restaurant} />
  </div>
))}

      </div>

      {/* Show More */}
      {visibleCount < filteredRestaurants.length && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <button
            onClick={handleShowMore}
            style={{
              backgroundColor: "#4f46e5",
              color: "white",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
