import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CartItemCard = ({ item, index }) => {
  let { name, price, defaultPrice, description, imageId } = item?.card?.info;

  const dispatch = useDispatch();

  const handleRemoveButtonClick = () => {
    dispatch(removeItem(index));
  };

  return (
    <>
      <div className="menu-card menu-item-card">
        {/* Left */}
        <div className="menu-card-left">
          <h2 className="menu-name">{name}</h2>
          <h3 className="menu-price">
            ₹
            {price
              ? Math.floor(price / 100)
              : defaultPrice
              ? Math.floor(defaultPrice / 100)
              : ""}
          </h3>
          <h4 className="menu-description">{description}</h4>
        </div>

        {/* Right */}
        <div className="menu-card-right">
          <img src={CDN_URL + imageId} alt="Menu Card Image" />
          <button className="remove-btn" onClick={handleRemoveButtonClick}>
            Remove -
          </button>
        </div>
      </div>
    </>
  );
};

export { CartItemCard };
