//TODO: connect it to backend
import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const FiveStar = ({ averageRating = 0, onRatingChange }) => {
  const [userRating, setUserRating] = useState(null);

  const handleRatingChange = (event, newValue) => {
    event.preventDefault();
    setUserRating(newValue);
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <Rating
      name="five-star-rating"
      value={userRating !== null ? userRating : averageRating}
      onChange={handleRatingChange}
      precision={1}
      max={5}
      sx={{
        fontSize: "1.5rem",
        "& .MuiRating-iconFilled": {
          color: "#FFD700",
        },
        "& .MuiRating-iconHover": {
          color: "#FFC107",
        },
      }}
    />
  );
};

export default FiveStar;
