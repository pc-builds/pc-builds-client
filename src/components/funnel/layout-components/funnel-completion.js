import React from "react";
import { theme } from "../../../utils";

export default function FunnelCompletion({ completion }) {
  return (
    <>
      <div
        style={{
          height: "10px",
          width: "100%",
          maxWidth: "350px",
          borderRadius: "20px",
          background: "lightGrey",
        }}
      >
        <div
          style={{
            width: `${completion}%`,
            height: "100%",
            background: theme.colors.bg.accent,
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </>
  );
}
