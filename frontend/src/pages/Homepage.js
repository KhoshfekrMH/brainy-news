import React from "react";
import Grid from "@mui/material/Grid";
import PageLayout from "../shared/layout/PageLayout";
import NewsCard from "../shared/components/UIElements/NewsCard";
import { banners } from "../shared/data/DummyData";
import { NewsContext } from "../shared/context/NewsContext";

const Homepage = () => {
  const { newsItems } = React.useContext(NewsContext);
  const handleReadMore = () => {
    {
      /*TODO: remove this dummy for test*/
    }
    console.log("Read more clicked");
  };

  const recentNews = newsItems.slice(0, 3);

  return (
    <PageLayout showBanner={true} banners={banners}>
      <Grid container spacing={2} justifyContent="center">
        {recentNews.map((news) => (
          <Grid item xs={12} sm={6} md={4}>
            <NewsCard
              key={news.id}
              image={news.image}
              title={news.title}
              intro={news.intro}
              onReadMore={handleReadMore}
              date={news.date}
              writerId={news.writerId}
            />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default Homepage;
