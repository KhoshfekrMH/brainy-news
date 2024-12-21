import React from "react";
import NavBar from "../components/Navigation/Navbar";
import NewsBannerSlide from "../components/UIElements/NewsBannerSlide";

const Header = ({ showBanner = true, banners }) => {
  return (
    <header>
      <NavBar />
      {showBanner && <NewsBannerSlide banners={banners} />}
    </header>
  );
};

export default Header;
