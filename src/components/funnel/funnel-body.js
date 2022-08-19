import React from "react";
import { FunnelSlice } from "./index";

export default function FunnelBody({ stepData }) {
  return (
    <>
      {stepData && (
        <FunnelSlice
          sliceType={stepData.sliceType}
          options={stepData.options}
          //   onClick={handleClick}
        />
      )}
    </>
  );
}
