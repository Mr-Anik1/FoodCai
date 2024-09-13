import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructuring Each Restaurant
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
  } = resData?.info;

  return (
    <>
      <div className="card">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
        <div className="card-text">
          <h1>{name}</h1>
          <h2>
            <span className="cost-two">{costForTwo}</span>
          </h2>
          <h3>
            ⭐️ <span className="stars">{avgRating}</span> stars . {slaString}
          </h3>
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </div>
    </>
  );
};

/**
 * @Higher_Order_Component
 *   - Accept function(component) as a argument
 *   - Return function(component)
 *
 * Here this higher order component accept <RestaurantCard/> component as argument and return another component.
 *
 */
export const withPromotedLabel = (RestaurantCard) => {
  // It returns a component who is accept props.
  return (props) => {
    return (
      <>
        <div className="with-promoted-parents">
          <label className="promoted-label">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};
