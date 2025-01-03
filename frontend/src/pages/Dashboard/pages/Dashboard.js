import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../shared/context/UserContext";
import PageLayout from "../../../shared/layout/PageLayout";

const Dashboard = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/log-in");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <PageLayout showBanner={false}>
      <h1>Dashboard</h1>
    </PageLayout>
  );
};

export default Dashboard;
