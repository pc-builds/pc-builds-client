import React from "react";
import { Container, Distance, H4, TextBase } from "../../../components-stateless";
import { FunnelCompletion } from "./index";

export default function FunnelHead({ stepData, completion }) {
  return (
    <>
      <Container py="35px" alignText="center">
        <FunnelCompletion completion={completion} />
        <Distance size="24" />
        <H4>
          {stepData.step}
          {". "}
          {stepData.question}
        </H4>
        <Container maxWidth={500} centerAlignContent alignText="center">
          <TextBase>
            {stepData.description}
          </TextBase>
        </Container>
      </Container>
    </>
  );
}
