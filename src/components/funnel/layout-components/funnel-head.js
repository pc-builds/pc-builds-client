import React from "react";
import { Container, H4, SpaceBetween } from "../../../components-stateless";
import { FunnelCompletion } from "./index";

export default function FunnelHead({ stepData, completion }) {
  return (
    <>
      <Container py="35px">
        <SpaceBetween
          flexDirection={{ xs: "column-reverse", md: "row" }}
          gap={50}
        >
          <H4>
            {stepData.step}
            {". "}
            {stepData.question}
          </H4>
          <FunnelCompletion completion={completion} />
        </SpaceBetween>
      </Container>
    </>
  );
}
