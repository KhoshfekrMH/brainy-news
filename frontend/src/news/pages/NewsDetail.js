import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { newsItems, users } from "../../shared/data/DummyData";
import PageLayout from "../../shared/layout/PageLayout";
import FiveStar from "../../shared/components/UIElements/FiveStar";

const NewsDetail = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const newsItem = newsItems.find((item) => item.id === newsId);
  const writer = users.find((user) => user.id === newsItem.writerId);

  const [rating, setRating] = useState(newsItem?.rating || 0);
  const [totalRating, setTotalRating] = useState(newsItem?.totalRatings || 0);

  if (!newsItem) {
    return <p>News item not found</p>;
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
      <h1>{newsItem.title}</h1>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        style={{ maxWidth: "100%" }}
      />
      <p>{newsItem.body}</p>
      <p>Published on: {new Date(newsItem.date).toLocaleDateString()}</p>
      <p>Written by: {writer?.name}</p>
      <FiveStar averageRating={rating} onRatingChange={handleRatingChange} />
    </PageLayout>
  );
};

export default NewsDetail;
