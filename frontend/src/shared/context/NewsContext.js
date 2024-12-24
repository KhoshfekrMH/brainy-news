import React, { createContext, useState, useEffect } from "react";
import { newsItems as initialNewsItems } from "../data/DummyData";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = () => {
      const sortedNews = initialNewsItems
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      setNewsItems(sortedNews);
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ newsItems }}>
      {children}
    </NewsContext.Provider>
  );
};
