import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { FlexContainer } from "../../components-stateless";
import { useFunnel, FunnelHead, FunnelBody, FunnelFooter } from "./index";

export default function Funnel() {
  let { id } = useParams();
  let { state } = useLocation();

  const { stepData, currentStep, updateAnswer, updateStep, completion, answer, answers } =
    useFunnel(id, false, state);

  return (
    <>
        <FlexContainer flexDirection="column" height="100%">
          <FlexContainer flexDirection="column" justifyContent="center" flexGrow={1}>
            <FunnelHead stepData={stepData} completion={completion} />
            <FunnelBody stepData={stepData} answer={answer} updateAnswer={updateAnswer} />
          </FlexContainer>
          <FunnelFooter
            updateStep={updateStep}
            currentStep={currentStep}
            completion={completion}
            answer={answer}
            answers={answers}
          />
        </FlexContainer>
    </>
  );
}
