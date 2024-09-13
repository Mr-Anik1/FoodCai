import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    // Update the state with restaurant data
    setResInfo(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
};

export { useRestaurantMenu };
