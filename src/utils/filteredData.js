// Filter Rating Search
export const filteredRating = ({ rating, restaurants }) => {
  if (rating === "All") {
    return restaurants;
  }

  const data = restaurants.filter((restaurant) => {
    return restaurant.info?.avgRating >= +rating;
  });

  return data;
};

// Filter Search Text
export const filteredSearch = ({ searchText, restaurants }) => {
  const data = restaurants.filter((restaurant) => {
    return restaurant.info?.name
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
  });

  return data;
};
