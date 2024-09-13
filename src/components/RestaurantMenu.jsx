import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import { RegularCategoriesItemCards, RegularItemCards } from "./RegularCards";
import { ShimmerRestaurantMenu } from "./ShimmerRestaurantMenu";

const RestaurantMenu = () => {
  // For Accordion
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  // Here I use custom hook useRestaurantMenu for fetch Data.
  const resInfo = useRestaurantMenu(resId);

  // When data is not loading.
  if (resInfo === null) {
    return <ShimmerRestaurantMenu />;
  }

  const {
    name,
    cloudinaryImageId,
    costForTwo,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla: { slaString, lastMileTravelString },
    labels,
  } = resInfo?.cards[2]?.card?.card?.info;

  // Base Card
  const baseRegularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(
      1,
      -2
    ) ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1, -2);

  return (
    <>
      {/* Each Child need unique key */}
      <div className="menu-body">
        <h1>{name}</h1>
        {/* Card Design */}
        <div className="menu-card">
          <div className="menu-card-text">
            <h3>
              ⭐️ <span className="menu-stars">{avgRating}</span> (
              {totalRatingsString}) .{" "}
              <span className="menu-cost-two">{costForTwoMessage}</span>
            </h3>

            <h4>{cuisines.join(", ")}</h4>

            <h5>{labels[1].message}</h5>
          </div>

          <img src={CDN_URL + cloudinaryImageId} alt={name} />
        </div>

        {baseRegularCards?.map((regularCard, index) =>
          regularCard?.card?.card?.itemCards ? (
            <RegularItemCards
              key={regularCard?.card?.card?.title}
              regularCard={regularCard?.card?.card}
              cloudinaryImageId={cloudinaryImageId}
              setShowIndex={() => setShowIndex(index)}
              showItems={index === showIndex ? true : false}
            />
          ) : (
            <RegularCategoriesItemCards
              key={regularCard?.card?.card?.title}
              regularCard={regularCard?.card?.card}
              cloudinaryImageId={cloudinaryImageId}
              setShowIndex={() => setShowIndex(index)}
              showItems={index === showIndex ? true : false}
            />
          )
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
