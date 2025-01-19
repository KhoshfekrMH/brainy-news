import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { newsItems, users } from "../../shared/data/DummyData";
import PageLayout from "../../shared/layout/PageLayout";
import FiveStar from "../../shared/components/UIElements/FiveStar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NewsDetail = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const newsItem = newsItems.find((item) => item.id === newsId);
  const writer = users.find((user) => user.id === newsItem.writerId);

  const [rating, setRating] = useState(newsItem?.rating || 0);
  const [totalRating, setTotalRating] = useState(newsItem?.totalRatings || 0);

  if (!newsItem) {
    return <p>News item not found</p>; //TODO: add a 404 page
  }

  const handleRatingChange = (newRating) => {
    const newTotalRating = totalRating + 1;
    const updatedRating = (rating * totalRating + newRating) / newTotalRating;

    setRating(updatedRating);
    setTotalRating(newTotalRating);

    console.log(
      `Updated rating for news item ${newsItem.id}: ${updatedRating}`,
    );
  };

  return (
    <PageLayout showBanner={false}>
      {/* Overall container */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* News Title */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "24px",
            padding: "8px",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0 4px 15px rgba(255, 215, 0, 0.8)",
            },
          }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            {newsItem.title}
          </Typography>
        </Box>

        {/* Content containers */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Image container */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "400px",
              overflow: "hidden",
              borderRadius: "8px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 6px 20px rgba(255, 215, 0, 0.8)",
              },
            }}
          >
            <img
              src={newsItem.image}
              alt={newsItem.title}
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
          </Box>

          {/* Metadata container */}
          <Box
            sx={{
              flex: 1,
              padding: "16px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 6px 20px rgba(255, 215, 0, 0.8)",
              },
            }}
          >
            {/* Publish Info */}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Published on: {new Date(newsItem.date).toLocaleDateString()}
            </Typography>

            {/* Writer Info */}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Written by: <strong>{writer?.name}</strong>
            </Typography>

            {/* Rating */}
            <Box sx={{ marginY: "16px" }}>
              <FiveStar
                averageRating={rating}
                onRatingChange={handleRatingChange}
              />
              <Typography variant="caption" color="text.secondary">
                {totalRating} total ratings
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Body Text */}
        <Box
          sx={{
            textAlign: "justify",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0 6px 20px rgba(255, 215, 0, 0.8)",
            },
          }}
        >
          <Typography variant="body1">{newsItem.body}</Typography>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default NewsDetail;
