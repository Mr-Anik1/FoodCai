import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleBtnClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <>
      {/* NavBar */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={LOGO} alt="logo" />
          </Link>
        </div>

        <div className="nav-list">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div>
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </div>
          <div>
            <Link className="link" to="/cart">
              <div className="cart-icon">
                <FaShoppingCart />
                <span className="badge">{cartItems.length}</span>
              </div>
            </Link>
          </div>
          <button className="login-btn" onClick={handleBtnClick}>
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
