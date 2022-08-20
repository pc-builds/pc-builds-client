import React from "react";
import { Container, Content } from "../index";

export default function Section({ background, children, fullHeight }) {
  return (
    <Container bg={background} fullHeight={fullHeight}>
      <Content fullHeight={fullHeight}>{children}</Content>
    </Container>
  );
}
