import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const RoleEditDrawer = ({ open, onClose, onRoleChange, currentRole }) => {
  const roles = ["Admin", "User"];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Change Role
        </Typography>
        <List>
          {roles.map((role) => (
            <ListItem key={role} disablePadding>
              <ListItemButton
                selected={role.toLocaleLowerCase() === currentRole}
                onClick={() => onRoleChange(role)}
              >
                <ListItemText primary={role} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default RoleEditDrawer;
