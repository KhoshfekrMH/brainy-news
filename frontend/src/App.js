import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import Navbar from "../src/shared/components/Navigation/Navbar";
import NewsCard from "./shared/components/UIElements/NewsCard";
import NewsBannerSlide from "./shared/components/UIElements/NewsBannerSlide";

import "./App.css";
//TODO: Remove dummy data
const newsItems = [
  {
    id: 1,
    title: "News item 1",
    image: "https://picsum.photos/200/300",
    intro: "This is the intro for news item 1",
  },
  {
    id: 2,
    title: "News item 2",
    image: "https://picsum.photos/200/300",
    intro: "This is the intro for news item 2",
  },
  {
    id: 3,
    title: "News item 3",
    image: "https://picsum.photos/200/300",
    intro: "This is the intro for news item 3",
  },
];

const banners = [
  {
    id: 1,
    src: "https://picsum.photos/200/300",
    alt: "Banner 1",
    title: "Banner Title 1",
    link: "/news/1",
  },
  {
    id: 2,
    src: "https://picsum.photos/200/300",
    alt: "Banner 2",
    title: "Banner Title 2",
    link: "/news/2",
  },
  {
    id: 3,
    src: "https://picsum.photos/200/300",
    alt: "Banner 3",
    title: "Banner Title 3",
    link: "/news/3",
  },
];

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
      <h1>Home</h1>
      <div>
        <NewsBannerSlide banners={banners} />
      </div>
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
    </div>
  );
};

const News = () => {
  return (
    <div>
      <h1>News</h1>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
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
