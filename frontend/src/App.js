import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import PageLayout from "./shared/layout/PageLayout";
import Homepage from "./pages/Homepage";

import "./App.css";

//TODO: Remove dummy pages
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
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<News />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
