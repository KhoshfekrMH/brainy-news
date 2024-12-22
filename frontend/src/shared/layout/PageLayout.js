import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({ children, showBanner = true, banners }) => {
  return (
    <div>
      <Header showBanner={showBanner} banners={banners} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
