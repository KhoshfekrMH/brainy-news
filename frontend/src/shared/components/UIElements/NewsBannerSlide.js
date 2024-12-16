import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const NewsBannerSlide = ({ banners }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const handleBannerClick = (link) => {
    navigate(link);
  };

  return (
    <Box sx={{ maxWidth: "90%", margin: "20px auto", overflow: "hidden" }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <Box
            key={banner.id}
            sx={{ position: "relative" }}
            onClick={() => handleBannerClick(banner.link)}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              {banner.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NewsBannerSlide;
