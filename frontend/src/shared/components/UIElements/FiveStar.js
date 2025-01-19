//TODO: connect it to backend
import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";

const FiveStar = ({ newsId, averageRating = 0, onRatingChange }) => {
  const [userRating, setUserRating] = useState(null);
  const [isRated, setIsRated] = useState(false);

  useEffect(() => {
    const ratedNews = JSON.parse(localStorage.getItem("ratedNews")) || {};
    if (ratedNews[newsId]) {
      setUserRating(ratedNews[newsId]);
      setIsRated(true);
    }
  }, [newsId]);

  const handleRatingChange = (event, newValue) => {
    event.preventDefault();
    if (isRated) {
      return;
    }
    setUserRating(newValue);
    setIsRated(true);
    const ratedNews = JSON.parse(localStorage.getItem("ratedNews")) || {};
    ratedNews[newsId] = newValue;
    localStorage.setItem("ratedNews", JSON.stringify(ratedNews));

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
      readOnly={isRated}
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
