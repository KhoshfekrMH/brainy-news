import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { users } from "../../data/DummyData";

const NewsCard = ({ id, image, title, intro, writerId, date }) => {
  const navigate = useNavigate();

  const onReadMore = () => {
    navigate(`/news/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px auto",
        borderRadius: "8px",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 6px 25px rgba(255, 215, 0, 0.8)",
        },
      }}
    >
      {/*====== News Media ======*/}
      <CardMedia component="img" height="140" image={image} alt={title} />

      {/*====== News Content ======*/}
      <CardContent>
        {/*== Title ==*/}
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>

        {/*== Intro ==*/}
        <Typography variant="body2" color="text.secondary">
          {intro}
        </Typography>
      </CardContent>

      {/*== Writer Name ==*/}
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontStyle: "italic", marginLeft: "8px" }}
        >
          {users.find((user) => user.id === writerId).name}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontStyle: "italic", marginLeft: "8px" }}
        >
          {date.split("T")[0]}
        </Typography>
      </Box>

      {/*====== Read More Button ======*/}
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={onReadMore}
          sx={{
            backgroundColor: "#ffd700",
            color: "#1e1e1e",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#e5c100",
            },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
