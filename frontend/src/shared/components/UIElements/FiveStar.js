//TODO: connect it to the backend
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";

const FiveStar = ({ value = 0, onRatingChange }) => {
  const handleRatingChange = (event, newValue) => {
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <Tooltip title={`Rating: ${value.toFixed(1) || "Not Rated"}`}>
      <Rating
        name="five-star-rating"
        value={value}
        onChange={handleRatingChange}
        precision={0.1}
        max={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          "& .MuiRating-icon": {
            color: "#FFD700",
          },
        }}
      />
    </Tooltip>
  );
};

export default FiveStar;
