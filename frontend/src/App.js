import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import PageLayout from "./shared/layout/PageLayout";
import NewsCard from "./shared/components/UIElements/NewsCard";
import { newsItems, banners } from "./shared/data/DummyData";

import "./App.css";

//TODO: Remove dummy pages
const Home = () => {
  const handleReadMore = () => {
    {
      /*TODO: remove this dummy for test*/
    }
    console.log("Read more clicked");
  };
  return (
    <PageLayout showBanner={true} banners={banners}>
      <div>
        {newsItems.map((news) => (
          <NewsCard
            key={news.id}
            image={news.image}
            title={news.title}
            intro={news.intro}
            onReadMore={handleReadMore}
          />
        ))}
      </div>
    </PageLayout>
  );
};

const News = () => {
  return (
    <PageLayout showBanner={false}>
      <h1>News</h1>
    </PageLayout>
  );
};

const Dashboard = () => {
  return (
    <PageLayout showBanner={false}>
      <h1>Dashboard</h1>
    </PageLayout>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
