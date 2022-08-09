import React from "react";
import { Container, Content } from "../index";

export default function Section({ background, children }) {
  return (
    <Container bg={background}>
      <Content>{children}</Content>
    </Container>
  );
}
