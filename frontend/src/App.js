import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./shared/context/UserContext";
import { NewsProvider } from "./shared/context/NewsContext";
import PageLayout from "./shared/layout/PageLayout";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import LogIn from "./pages/Dashboard/pages/EntryUI/LogIn";
import SignUp from "./pages/Dashboard/pages/EntryUI/SignUp";

import "./App.css";

const Dashboard = () => {
  return (
    <PageLayout showBanner={false}>
      <h1>Dashboard</h1>
      <LogIn />
      <SignUp />
    </PageLayout>
  );
};

const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<News />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </NewsProvider>
    </UserProvider>
  );
};

export default App;
