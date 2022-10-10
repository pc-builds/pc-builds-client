import React from "react";
import { useNavigate } from "react-router-dom";
import { Distance, H4 } from "../../components-stateless";
import { FunnelSlice, useFunnel } from "../index";

export default function FunnelTeaser() {
  const {
    stepData,
    currentStep,
    buildAnswersObject,
    answers,
    answer
  } = useFunnel("123456", true);

  let navigate = useNavigate();

  const handleClick = (value) => {
    const stateParam = buildAnswersObject(answers, 2, stepData.question, value);
    navigate(`/funnel/${123456}`, {state: stateParam});
  };

  return (
    <>
      <H4 alignText="center">
        {currentStep}
        {". "}
        {stepData.question}
      </H4>
      <Distance size="15" />
      {stepData && (
        <FunnelSlice
          sliceType={stepData.sliceType}
          options={stepData.options}
          answer={answer}
          onClick={handleClick}
        />
      )}
    </>
  );
}
