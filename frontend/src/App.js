import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import Navbar from "../src/shared/components/Navigation/Navbar";

import "./App.css";

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
