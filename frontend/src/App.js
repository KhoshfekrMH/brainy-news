import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import { NewsProvider } from "./shared/context/NewsContext";
import Dashboard from "./pages/Dashboard/pages/Dashboard";
import SignUpEntry from "./pages/Dashboard/pages/SignUpEntry";
import LogInEntry from "./pages/Dashboard/pages/LogInEntry";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import NewsDetail from "./news/pages/NewsDetail";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<News />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign-up" element={<SignUpEntry />} />
            <Route path="/log-in" element={<LogInEntry />} />
            <Route path="/test" element={<NewsDetail />} />
          </Routes>
        </Router>
      </NewsProvider>
    </UserProvider>
  );
};

export default App;
