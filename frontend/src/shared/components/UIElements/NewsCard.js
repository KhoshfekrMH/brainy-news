import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const NewsCard = ({ image, title, intro, onReadMore }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px auto",
        borderRadius: "8px", // rounded corners
        transition: "box-shadow 0.3s ease", // smooth shadow transition
        "&:hover": {
          boxShadow: "0 6px 25px rgba(255, 215, 0, 0.8)", // yellow shadow on hover
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

      {/*====== Read More Button ======*/}
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={onReadMore}
          sx={{
            backgroundColor: "#ffd700", // yellow background
            color: "#1e1e1e", // black text
            transition: "background-color 0.3s ease", // smooth background transition
            "&:hover": {
              backgroundColor: "#e5c100", // dark yellow on hover
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
