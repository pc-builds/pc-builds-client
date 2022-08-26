import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Container,
  FlexContainer,
  Card,
} from "../../components-stateless";
import { useFunnel, FunnelHead, FunnelBody, FunnelFooter } from "./index";

export default function Funnel() {
  let { id } = useParams();
  let { state } = useLocation();

  const { stepData, currentStep, updateAnswer, updateStep, completion, answer } =
    useFunnel(id, false, state);

  return (
    <>
      <Card>
        <Container fullHeight>
          <FlexContainer flexDirection="column" height="100%">
            <FunnelHead stepData={stepData} completion={completion} />
            <FunnelBody stepData={stepData} answer={answer} updateAnswer={updateAnswer} />
            <FunnelFooter
              updateStep={updateStep}
              currentStep={currentStep}
              completion={completion}
              answer={answer}
            />
          </FlexContainer>
        </Container>
      </Card>
    </>
  );
}
