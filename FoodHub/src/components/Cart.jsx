import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Calculate total
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price || item.defaultPrice || 0);
  }, 0);

  return (
    <div style={{ padding: "80px 2rem 2rem 2rem", minHeight: "80vh", position: "relative" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🛒 Your Cart</h1>

      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>₹ {(item.price || item.defaultPrice || 0) / 100}</p>
                </div>
                <button
                  onClick={() => dispatch(removeItem(index))}
                  style={{
                    backgroundColor: "#ff4d4f",
                    border: "none",
                    padding: "8px 12px",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* ✅ Total Price Section */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "30px",
              background: "#f8f8f8",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <h3>Total: ₹ {totalPrice / 100}</h3>
            <button
              onClick={() => dispatch(clearCart())}
              style={{
                marginTop: "10px",
                backgroundColor: "#ff6f00",
                border: "none",
                padding: "8px 14px",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p style={{ fontSize: "1rem", color: "#555" }}>
          Looks like your cart is empty. Add some tasty food!
        </p>
      )}
    </div>
  );
};

export default Cart;
