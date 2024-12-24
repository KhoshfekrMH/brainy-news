import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import PageLayout from "../shared/layout/PageLayout";
import NewsCard from "../shared/components/UIElements/NewsCard";
import { NewsContext } from "../shared/context/NewsContext";

const News = () => {
  const { newsItems } = useContext(NewsContext);

  const handleReadMore = () => {
    console.log("Read more clicked");
  };

  return (
    <PageLayout showBanner={false}>
      <Grid container spacing={2} justifyContent="center">
        {newsItems.map((news) => (
          <Grid item key={news.id} xs={12} sm={6} md={4}>
            <NewsCard
              image={news.image}
              title={news.title}
              intro={news.intro}
              onReadMore={handleReadMore}
            />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default News;
