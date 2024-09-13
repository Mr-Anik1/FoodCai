import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import { filteredRating, filteredSearch } from "../utils/filteredData";
import { addRestaurantsData } from "../utils/restaurantsDataSlice";
import RatingSearch from "./RatingSearch";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  const dispatch = useDispatch();
  // Get Restaurants Data from the store
  const allRestaurantsData = useSelector(
    (store) => store.restaurants?.restaurantsData
  );

  // State Variable - Super Powerful variable
  const [ratingRestaurants, setRatingRestaurants] =
    useState(allRestaurantsData);
  const [filteredRestaurant, setFilteredRestaurant] =
    useState(allRestaurantsData);

  // When a restaurant has promoted label, we have to create RestaurantCardPromoted card.
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  /**
   * @Handle_Function
   */
  const handleSearch = (searchText) => {
    // Need to filter the search data
    const searchedData = filteredSearch({
      searchText,
      restaurants: ratingRestaurants,
    });
    // Update the state - filteredRestaurant
    setFilteredRestaurant(searchedData);
  };

  const handleRatingSearch = (rating) => {
    // Filtered restaurants by using ratings.
    const ratingData = filteredRating({
      rating,
      restaurants: allRestaurantsData,
    });
    // Update states
    setRatingRestaurants(ratingData);
    setFilteredRestaurant(ratingData);
  };

  /**
   * @Fetch_Data
   * Fetch restaurant and food data with API call
   */
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    const restaurantsData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // Update the restaurant store
    dispatch(addRestaurantsData(restaurantsData));

    // Update states with the restaurant store data
    setRatingRestaurants(restaurantsData);
    setFilteredRestaurant(restaurantsData);
  };

  /**
   * @useEffect
   *
  - Page loads -> Render -> API call(500ms) -> Render

  - This useEffect hook is utilized to perform side effects in function components.

  - It ensures that the data fetching operation occurs after the initial rendering of the page.

  - The fetchData function is invoked within the useEffect hook, triggering the API call.

  - An empty dependency array [] indicates that the effect should run only once after the initial render.
   *
   */
  useEffect(() => {
    !allRestaurantsData && fetchData();
  }, []);

  /**
   * @allRestaurantsData_Empty_OR_Not
   * If allRestaurantsData is an empty array OR allRestaurantsData doesn't exist, then return shimmer.
   *
   */
  return !allRestaurantsData || allRestaurantsData?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body-component">
        <div className="top-body">
          {/* Filtered By Rating */}
          <RatingSearch handleRatingSearch={handleRatingSearch} />

          {/* Search Bar */}
          <Search handleSearch={handleSearch} />
        </div>

        {/* Restaurant Card */}
        <div className="restaurant-list">
          {filteredRestaurant.map((restaurant) => (
            // key should be in the parent jsx; here the link is the parent of <RestaurantCard/>.
            <Link
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
              className="restaurant-card-link"
            >
              {/* If the restaurant is promoted then return RestaurantCardPromoted otherwise return RestaurantCard */}
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
