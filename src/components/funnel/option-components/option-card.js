import React from "react";
import { Container, H5, TextBase } from "../../../components-stateless";
import { theme } from "../../../utils";
import { Card } from "../../index";

export default function OptionCard({ title, description }) {
  return (
    <>
      <Card elevated rounded clickable hover="green">
        <Container alignText="center" py={32} px={24}>
          <H5 fontWeight={theme.font.weight.medium}>{title}</H5>
          <TextBase smallerText>{description}</TextBase>
        </Container>
      </Card>
    </>
  );
}
