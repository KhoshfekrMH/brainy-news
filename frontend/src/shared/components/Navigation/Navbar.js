import React, { useContext, useState } from "react";
import { UserContext } from "../../../shared/context/UserContext";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/Brainy-News-logo.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const pages = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const { isLoggedIn } = useContext(UserContext);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer

  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem button key={page.name} component={Link} to={page.path}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1e1e1e", boxShadow: "none" }}
    >
      <Toolbar>
        {/*====== Mobile Drawer Icon ======*/}
        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList}
          </Drawer>
        </Box>

        {/*====== LOGO ======*/}
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
            mr: 2,
            borderRadius: "50%",
            backgroundColor: "#ffd700", // Golden Yellow
            boxShadow: "0 0 10px 4px rgba(255, 255, 255, 0.7)",
          }}
          alt="Brainy News Logo"
          src={logo}
        />

        {/*====== Title (Hidden on mobile) ======*/}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            display: { xs: "none", md: "block" },
            color: "#ffd700", // Golden Yellow
          }}
        >
          Brainy News
        </Typography>

        {/*====== Desktop Navigation Links (Hidden on mobile) ======*/}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                color: "#ffd700", // Golden Yellow
                textTransform: "none",
                fontSize: 16,
                "&:hover": {
                  color: "#fff9c4", // Pale Gold on hover
                },
                position:
                  location.pathname === page.path ? "relative" : "initial",
                "&.active": {
                  color: "#ffd700", // Golden Yellow text
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    backgroundColor: "#ffd700", // Golden Yellow
                  },
                },
              }}
              className={location.pathname === page.path ? "active" : ""}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {/*====== Avatar with condition ======*/}
        {isLoggedIn && (
          <Box sx={{ ml: 2 }}>
            <Tooltip title="Profile">
              <IconButton>
                <Avatar alt="User Avatar" src="https://picsum.photos/200/300" />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
