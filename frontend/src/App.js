import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import Navbar from "../src/shared/components/Navigation/Navbar";
import NewsCard from "./shared/components/UIElements/NewsCard";

import "./App.css";

// TODO: remove these dummy components
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
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
// TODO: until here

const App = () => {
  const handleReadMore = () => {
    {
      /*TODO: remove this dummy for test*/
    }
    console.log("Read more clicked");
  };

  return (
    <React.Fragment>
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
      {/*TODO: It should move to Home page*/}
      {newsItems.map((news) => (
        <NewsCard
          key={news.id}
          image={news.image}
          title={news.title}
          intro={news.intro}
          onReadMore={handleReadMore}
        />
      ))}
    </React.Fragment>
  );
};

export default App;
