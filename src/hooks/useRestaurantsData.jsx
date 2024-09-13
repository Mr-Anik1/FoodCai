import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SWIGGY_API } from "../utils/constants";
import { addRestaurantsData } from "../utils/restaurantsDataSlice";

const useRestaurantsData = () => {
  const dispatch = useDispatch();
  const restaurantsData = useSelector(
    (store) => store.restaurants?.restaurantsData
  );

  const getRestaurantsData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    const restaurantsData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    dispatch(addRestaurantsData(restaurantsData));
  };

  /**
       * @useEffect
       *
      - Page loads -> Render -> API call(500ms) -> Render
    
      - This useEffect hook is utilized to perform side effects in function components.
    
      - It ensures that the data fetching operation occurs after the initial rendering of the page.
    
      - The getRestaurantsData function is invoked within the useEffect hook, triggering the API call.
    
      - An empty dependency array [] indicates that the effect should run only once after the initial render.
       *
       */
  useEffect(() => {
    // if( !restaurantsData) getRestaurantsData();
    !restaurantsData && getRestaurantsData();
  }, []);
};

export { useRestaurantsData };
