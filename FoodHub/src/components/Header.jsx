import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/utils";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux"; // 👈 Import to access Redux store

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  // 👇 Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log("render");
  }, [btnName]);

  return (
    <div className="header" style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", alignItems: "center", backgroundColor: "#f8f9fa", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" style={{ height: "50px" }} />
      </div>
      <div className="nav-items">
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
          <li>Online Status: {OnlineStatus ? "✅" : "⭕"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <Link to="/cart" style={{ position: "relative" }}>
              🛒 Cart
              {cartItems.length > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-15px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.8rem",
                }}>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          {localStorage.getItem("isLoggedIn") ? (
  <li>
    <button
      onClick={() => {
        localStorage.removeItem("isLoggedIn");
        window.location.reload(); // force reload to update UI
      }}
    >
      Logout
    </button>
  </li>
) : (
  <li>
    <Link to="/login">Login</Link>
  </li>
)}

        </ul>
      </div>
    </div>
  );
};

export default Header;
