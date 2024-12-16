import React, { useContext } from "react";
import { UserContext } from "../../../shared/context/UserContext";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const pages = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar>
        {/*====== LOGO ======*/}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontweight: "bold" }}
        >
          LOGO
        </Typography>

        {/*====== Navigation Links ======*/}
        <Box sx={{ display: "flex", gap: 2 }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{ color: "white" }}
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
                <Avatar alt="User Avatar" src="https://picsum.photos/200/300" />{" "}
                {/*TODO: Replace with user avatar*/}
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
