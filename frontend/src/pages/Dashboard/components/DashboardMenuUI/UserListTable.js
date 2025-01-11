import React, { useContext, useState } from "react";
import { UserContext } from "../../../../shared/context/UserContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const UserListTable = () => {
  const { users, setUsers } = useContext(UserContext);
  const [newUser, setNewUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    role: "user",
    avatar: "https://picsum.photos/50/50",
  });
  const [editing, setEditing] = useState(null);

  const handleNewUserChange = (key, value) => {
    setNewUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.password) {
      setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
      setNewUser({
        id: null,
        name: "",
        email: "",
        password: "",
        role: "user",
        avatar: "https://picsum.photos/50/50",
      });
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleEditChange = (id, key, value) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, [key]: value } : user)),
    );
  };

  const toggleEdit = (id) => {
    setEditing(editing === id ? null : id);
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <h2>UserManager</h2>
      {/* Add User */}
      <Box sx={{ mb: 3, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
        <h3>Add New User</h3>
        <TextField
          label="Name"
          value={newUser.name}
          onChange={(e) => handleNewUserChange("name", e.target.value)}
          size="small"
          sx={{ mr: 2 }}
        />
        <TextField
          label="Email"
          value={newUser.email}
          onChange={(e) => handleNewUserChange("email", e.target.value)}
          size="small"
          sx={{ mr: 2 }}
        />
        <TextField
          label="Password"
          value={newUser.password}
          onChange={(e) => handleNewUserChange("password", e.target.value)}
          size="small"
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </Box>
      {/* User Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Password</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar src={user.avatar} alt={user.name} />
                </TableCell>
                <TableCell>
                  {editing === user.id ? (
                    <TextField
                      value={user.name}
                      onChange={(e) =>
                        handleEditChange(user.id, "name", e.target.value)
                      }
                      size="small"
                    />
                  ) : (
                    user.name
                  )}
                </TableCell>
                <TableCell>
                  {editing === user.id ? (
                    <TextField
                      value={user.email}
                      onChange={(e) =>
                        handleEditChange(user.id, "email", e.target.value)
                      }
                      size="small"
                    />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell>
                  {editing === user.id ? (
                    <TextField
                      value={user.role}
                      onChange={(e) =>
                        handleEditChange(user.id, "role", e.target.value)
                      }
                      size="small"
                    />
                  ) : (
                    user.role
                  )}
                </TableCell>
                <TableCell>
                  {editing === user.id ? (
                    <TextField
                      type="password"
                      value={user.password}
                      onChange={(e) =>
                        handleEditChange(user.id, "password", e.target.value)
                      }
                      size="small"
                    />
                  ) : (
                    "**************"
                  )}
                </TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant={editing === user.id ? "contained" : "outlined"}
                    color={editing === user.id ? "primary" : "secondary"}
                    onClick={() => toggleEdit(user.id)}
                  >
                    {editing === user.id ? "Save" : "Edit"}
                  </Button>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Save Change Button */}
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => localStorage.setItem("users", JSON.stringify(users))}
        >
          Save Changes Locally
        </Button>
      </Box>
    </Box>
  );
};

export default UserListTable;
