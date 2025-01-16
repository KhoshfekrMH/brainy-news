import React from "react";
import PageLayout from "../../shared/layout/PageLayout";
import FiveStar from "../../shared/components/UIElements/FiveStar";

const NewsDetail = () => {
  return (
    <PageLayout showBanner={false}>
      <h1>News Detail</h1>
      <FiveStar />
    </PageLayout>
  );
};

export default NewsDetail;
