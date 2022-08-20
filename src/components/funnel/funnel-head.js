import React from "react";
import { Container, H4, SpaceBetween } from "../../components-stateless";
import { FunnelCompletion } from "./index";

export default function FunnelHead({ stepData, completion }) {
  return (
    <>
      <Container px={25} py={35}>
        <SpaceBetween>
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
