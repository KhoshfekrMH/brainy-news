import React, { useContext, useState } from "react";
import { UserContext } from "../../../../shared/context/UserContext";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import UserListTable from "./UserListTable";
import NewsList from "./NewsList";

const DashboardMenu = () => {
  const { currentUser } = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setSelectedTab(newValue);
  };

  const tabs =
    currentUser.role === "owner" || currentUser.role === "admin"
      ? ["Bookmarks", "Notifications", "User List", "News List"]
      : ["Saved Articles", "Notifications"];

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
        {tabs[selectedTab] === "News List" && <NewsList />}
        {tabs[selectedTab] === "User List" && <UserListTable />}
        {tabs[selectedTab] === "Bookmarks" && (
          <Typography variant="h6">Work in progress....!</Typography>
        )}
        {tabs[selectedTab] === "Notifications" && (
          <Typography variant="h6">Work in progress....!</Typography>
        )}
      </Box>
    </Box>
  );
};

export default DashboardMenu;
