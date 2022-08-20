import React from "react";
import { useParams } from "react-router-dom";
import { Container, FlexContainer, SpaceBetween } from "../../components-stateless";
import { Card } from "../index";
import { useFunnel, FunnelHead, FunnelBody, FunnelFooter } from "./index";

export default function Funnel() {
  let { id } = useParams();

  const { stepData, currentStep, updateAnswer, updateStep, completion } =
    useFunnel(id);

  return (
    <>
      <Card>
        <Container fullHeight>
          <FlexContainer flexDirection="column" height="100%">
            <FunnelHead stepData={stepData} completion={completion} />
            <FunnelBody stepData={stepData} />
            <FunnelFooter updateStep={updateStep} />
          </FlexContainer>
        </Container>
      </Card>
    </>
  );
}
