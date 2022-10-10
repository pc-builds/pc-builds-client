import React from "react";
import CardGrid from "./funnel-slices/card-grid";
import ImageCardGrid from "./funnel-slices/image-card-grid";

const FunnelSlice = ({ sliceType, ...props }) => {
  switch (sliceType) {
    case "card-grid":
      return <CardGrid {...props} />;

    case "image-card-grid":
      return <ImageCardGrid {...props} />;

    default:
      return null;
  }
};

export default FunnelSlice;