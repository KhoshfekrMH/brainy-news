import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import Header from "./shared//layout/Header";
import NewsCard from "./shared/components/UIElements/NewsCard";
import { newsItems, banners } from "./shared/data/DummyData";
import Footer from "./shared/layout/Footer";

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
    <div>
      <Header showBanner={true} banners={banners} />
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
      <Footer />
    </div>
  );
};

const News = () => {
  return (
    <div>
      <Header showBanner={false} />
      <h1>News</h1>
      <Footer />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <Header showBanner={false} />
      <h1>Dashboard</h1>
      <Footer />
    </div>
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
