//TODO: connect it to the backend
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";

const FiveStar = ({ defaultValue = 0, onRatingChange }) => {
  const [rating, setRating] = useState(defaultValue);

  const handleRatingChange = (newValue) => {
    setRating(newValue);
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <Tooltip title={`Rating: ${rating || "Not Rated"}`}>
      <Rating
        name="five-star-rating"
        value={rating}
        onChange={handleRatingChange}
        precision={1}
        max={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          color: "gold",
          "& .MuiRating-iconEmpty": {
            color: "#ccc",
          },
        }}
      />
    </Tooltip>
  );
};

export default FiveStar;
