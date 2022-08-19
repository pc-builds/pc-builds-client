import React from "react";

export default function FunnelCompletion({ completion }) {
  console.log(completion);
  return (
    <div>
      <div>
        <div
          style={{
            height: "10px",
            width: "300px",
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
      </div>
    </div>
  );
}
