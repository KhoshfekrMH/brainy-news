import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UserContext } from "../../../../shared/context/UserContext";
import { newsItems as initialNewsItems } from "../../../../shared/data/DummyData";

const NewsList = () => {
  const { currentUser } = useContext(UserContext);
  const [newsItems, setNewsItems] = useState(initialNewsItems);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    intro: "",
    body: "",
    image: "",
    writerId: currentUser.id,
    date: new Date().toISOString(),
    rating: 0,
    totalRatings: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateNews = () => {
    if (!currentUser) {
      alert("You must be logged in to add news");
      return;
    }
    if (isEditing) {
      setNewsItems((prev) =>
        prev.map((item) =>
          item.id === formData.id
            ? { ...formData, writerId: currentUser.id }
            : item,
        ),
      );
      console.log("Updated news:", formData);
    } else {
      const newNews = {
        ...formData,
        id: Math.floor(Math.random() * 10000),
        date: new Date().toISOString(),
        intro: formData.intro || formData.body.slice(0, 100),
        writerId: currentUser.id,
      };
      setNewsItems((prev) => [newNews, ...prev]);
      console.log("Added News", newNews);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      title: "",
      intro: "",
      body: "",
      image: "",
      writerId: currentUser?.id || "",
      date: new Date().toISOString(),
      rating: 0,
      totalRatings: 0,
    });
    setIsEditing(false);
  };

  const handleEdit = (news) => {
    setFormData(news);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setNewsItems((prev) => prev.filter((item) => item.id !== id));
    console.log("Deleted news with ID:", id);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Manage News
      </Typography>

      {/* News Form*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
        }}
      >
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Intro"
          name="intro"
          value={formData.intro}
          onChange={handleInputChange}
        />
        <TextField
          label="Body"
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          required
          multiline
          rows={4}
        />
        <TextField
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdateNews}
        >
          {isEditing ? "Update" : "Add"} News
        </Button>
        {isEditing && (
          <Button variant="outlined" color="error" onClick={resetForm}>
            Cancel
          </Button>
        )}
      </Box>

      {/*News Table */}
      <TableContainer sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Intro</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newsItems.map((news) => (
              <TableRow key={news.id}>
                <TableCell>{news.title}</TableCell>
                <TableCell>{news.intro}</TableCell>
                <TableCell>
                  {new Date(news.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(news)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(news.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NewsList;
