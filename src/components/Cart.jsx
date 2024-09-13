import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { CartItemCard } from "./CartItemCard";

const Cart = () => {
  const dispatch = useDispatch();

  const handelClearCartBtnClick = () => {
    // Dispatch an action
    dispatch(clearCart());
  };

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="cart-card-container">
        {/* Cart Header */}
        <div className="cart-tag-container">
          <h1 className="cart-items-tag">Cart Items ({cartItems.length})</h1>
          <button className="clear-cart" onClick={handelClearCartBtnClick}>
            Clear Cart
          </button>
        </div>

        {/* All Items */}
        {cartItems?.map((item, index) => (
          <CartItemCard key={item?.card?.info?.id} item={item} index={index} />
        ))}

        {/* When the cart is empty, it will show this message. */}
        {cartItems.length === 0 && (
          <>
            <div className="cart-empty-content">
              <h1 className="oops-msg">Opps!</h1>
              <h1>Your cart is empty; please add some items to the cart.</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { Cart };
