import React from "react";

export default function FunnelCompletion({ completion }) {
  return (
    <>
      <div
        style={{
          height: "10px",
          width: "100%",
          maxWidth: "300px",
          borderRadius: "20px",
          background: "lightGrey",
        }}
      >
        <div
          style={{
            width: `${completion}%`,
            height: "100%",
            background: "green",
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </>
  );
}
