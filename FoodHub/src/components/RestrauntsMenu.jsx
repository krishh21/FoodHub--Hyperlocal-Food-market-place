import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CD_URL } from "../utils/api";
import useRestrauntsMenu from "../utils/useRestrauntMenu";
import { addItem } from "../utils/cartSlice";

const RestrauntsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntsMenu(resId);
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState(null);
  const [addedItemId, setAddedItemId] = useState(null); // 🔔 For toast

  if (!resInfo)
    return <h3 style={{ paddingTop: "100px" }}>Loading menu...</h3>;

  const restaurantName = resInfo?.cards?.[0]?.card?.card?.text || "Restaurant";
  const city = resInfo?.cards?.[2]?.card?.card?.info?.city || "Unknown City";
  const cuisines =
    resInfo?.cards?.[2]?.card?.card?.info?.cuisines?.join(", ") || "N/A";
  const costForTwo =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "N/A";

  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const getCategorizedMenu = () => {
    return regularCards
      .filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      .map((category) => ({
        title: category?.card?.card?.title,
        items: category?.card?.card?.itemCards,
      }));
  };

  const toggleCategory = (title) => {
    setActiveCategory((prev) => (prev === title ? null : title));
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500); // 🔄 Hide after 1.5 sec
  };

  return (
    <div
      className="items-center justify-center text-center"
      style={{ padding: "80px 2rem 2rem 2rem" }}
    >
      <h1>🍴 {restaurantName}</h1>
      <h3>📍 {city}</h3>
      <p>🧾 {cuisines}</p>
      <p>💰 {costForTwo}</p>

      <h2 style={{ marginTop: "2rem" }}>📋 Menu</h2>

      {getCategorizedMenu().length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        getCategorizedMenu().map((category, index) => (
          <div key={`${category.title}-${index}`} style={{ marginBottom: "2rem" }}>
            <button
              onClick={() => toggleCategory(category.title)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem",
                background: "#f4f4f4",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              🍕 {category.title} {activeCategory === category.title ? "▲" : "▼"}
            </button>

            {activeCategory === category.title && (
              <ul style={{ listStyle: "none", padding: "1rem 0" }}>
                {category.items.map((item, i) => {
                  const info = item?.card?.info;
                  if (!info) return null;

                  return (
                    <li
                      key={`${info.id}-${i}`}
                      style={{
                        marginBottom: "2rem",
                        padding: "1rem",
                        borderBottom: "1px solid #ddd",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ flex: 1, textAlign: "left" }}>
                        <h4>{info.name}</h4>
                        <p style={{ margin: "0.5rem 0" }}>{info.description}</p>
                        <p>₹ {(info.price || info.defaultPrice || 0) / 100}</p>

                        <button
                          onClick={() => handleAddToCart(info)}
                          style={{
                            padding: "0.5rem 1rem",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            marginTop: "0.5rem",
                          }}
                        >
                          ➕ Add to Cart
                        </button>

                        {/* ✅ Toast Message */}
                        {addedItemId === info.id && (
                          <p style={{ color: "green", marginTop: "0.4rem" }}>
                            ✅ Item added to cart!
                          </p>
                        )}
                      </div>

                      {info.imageId && (
                        <img
                          src={CD_URL + info.imageId}
                          alt={info.name}
                          style={{
                            width: "100px",
                            height: "80px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RestrauntsMenu;
