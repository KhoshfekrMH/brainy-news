import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

import "./NewsCard.css";

const NewsCard = ({ image, title, intro, onReadMore }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "16px auto" }}>
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
        <Button size="small" color="primary" onClick={onReadMore}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
