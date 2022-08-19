import React from "react";
import CardGrid from "./funnel-slices/card-grid";

const FunnelSlice = ({ sliceType, ...props }) => {
  switch (sliceType) {
    case "card-grid":
      return <CardGrid {...props}/>;

    default:
      return null;
  }
};

export default FunnelSlice;