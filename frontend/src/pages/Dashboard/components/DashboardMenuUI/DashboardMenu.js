import React, { useContext, useState } from "react";
import { UserContext } from "../../../../shared/context/UserContext";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const DashboardMenu = () => {
  const { currentUser } = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Tabs based on user role
  const adminTabs = ["News List", "User List"];
  const userTabs = ["Saved Articles", "Notifications"];
  const tabs = currentUser?.role === "admin" ? adminTabs : userTabs;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="yellow"
        indicatorColor="secondary"
        aria-label="dashboard menu tabs"
        variant="fullWidth"
        sx={{
          padding: 2,
          backgroundColor: "#1e1e1e",
          color: "#ffd700",
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} />
        ))}
      </Tabs>

      <Box sx={{ padding: 2 }}>
        {tabs[selectedTab] === "News List" && (
          <Typography variant="h6">News List Content</Typography>
        )}
        {tabs[selectedTab] === "User List" && (
          <Typography variant="h6">User List Content</Typography>
        )}
        {tabs[selectedTab] === "Saved Articles" && (
          <Typography variant="h6">Saved Articles Content</Typography>
        )}
        {tabs[selectedTab] === "Notifications" && (
          <Typography variant="h6">Notifications Content</Typography>
        )}
      </Box>
    </Box>
  );
};

export default DashboardMenu;
