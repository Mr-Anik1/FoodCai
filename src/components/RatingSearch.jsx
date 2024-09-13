import { useState } from "react";

const RatingSearch = ({ handleRatingSearch }) => {
  const [rating, setRating] = useState("All");

  const handleRatingChange = (event) => {
    const selectedRating = event.target.value;

    // Update the rating state with the selected value
    setRating(selectedRating);

    // Immediately calls handleRatingSearch function with the selected rating
    handleRatingSearch(selectedRating);
  };

  return (
    <>
      <div className="rating-search">
        {/* Always add either an id or a name attribute to each form field elements(like input fields, select boxes, etc.). It's recommended to use both for better accessibility and identification. */}
        <select
          id="rating"
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          className="select-rating"
        >
          <option value="All">All</option>
          <option value="5">5</option>
          <option value="4.8">4.8</option>
          <option value="4.5">4.5</option>
          <option value="4">4</option>
          <option value="3.5">3.5</option>
        </select>
      </div>
    </>
  );
};

export default RatingSearch;

/*
Since setRating is an asynchronous function, the state update won't happen immediately. So when you call handleRatingSearch(rating) immediately after setRating, rating may not have been updated yet.

In this version, we're passing selectedRating (the value from event.target.value) directly to handleRatingSearch, ensuring that we're using the most up-to-date value of the rating. This way, you won't encounter any synchronization issues between state updates and function calls.

*/
