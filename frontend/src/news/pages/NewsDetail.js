import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "../../shared/data/DummyData";
import PageLayout from "../../shared/layout/PageLayout";
import FiveStar from "../../shared/components/UIElements/FiveStar";

const NewsDetail = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const newsItem = newsItems.find((item) => item.id === newsId);

  const [rating, setRating] = useState(newsItem?.rating || 0);
  const [totalRating, setTotalRating] = useState(newsItem?.totalRatings || 0);

  if (!newsItem) {
    return <p>News item not found</p>;
  }

  const handleRatingChange = (newRating) => {
    const newTotalRating = totalRating + 1;
    const updatedRating = (rating * totalRating + newRating) / newTotalRating;

    newsItem.rating = updatedRating;
    newsItem.totalRatings = newTotalRating;

    console.log(
      `Updated rating for news item ${newsItem.id}: ${updatedRating}`,
    );
  };

  return (
    <PageLayout showBanner={false}>
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} />
      <p>{newsItem.body}</p>
      <p>Published on: {new Date(newsItem.date).toLocaleDateString()}</p>
      <p>Written by: {newsItem.writerId}</p>
      <p>Average Rating: {rating.toFixed(1)}</p>
      <p>Total Ratings: {totalRating}</p>
      <FiveStar rating={rating} onRatingChange={handleRatingChange} />
    </PageLayout>
  );
};

export default NewsDetail;
