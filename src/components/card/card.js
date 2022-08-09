import React from "react";
import { CardWrapper } from "./styles";

export default function Card({ children, ...other }) {
  return (
    <>
      <CardWrapper {...other}>{children}</CardWrapper>
    </>
  );
}
