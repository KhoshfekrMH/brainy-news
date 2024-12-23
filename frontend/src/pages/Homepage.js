import React from "react";
import PageLayout from "../shared/layout/PageLayout";
import NewsCard from "../shared/components/UIElements/NewsCard";
import { newsItems, banners } from "../shared/data/DummyData";

const Homepage = () => {
  const handleReadMore = () => {
    {
      /*TODO: remove this dummy for test*/
    }
    console.log("Read more clicked");
  };
  return (
    <PageLayout showBanner={true} banners={banners}>
      {newsItems.map((news) => (
        <NewsCard
          key={news.id}
          image={news.image}
          title={news.title}
          intro={news.intro}
          onReadMore={handleReadMore}
        />
      ))}
    </PageLayout>
  );
};

export default Homepage;
