import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../shared/context/UserContext";
import PageLayout from "../../../shared/layout/PageLayout";
import DashboardMenu from "../components/DashboardMenuUI/DashboardMenu";

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
      <DashboardMenu />
    </PageLayout>
  );
};

export default Dashboard;
