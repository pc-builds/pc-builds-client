import React from "react";
import { useNavigate } from "react-router-dom";
import { Distance, H4 } from "../../components-stateless";
import { FunnelSlice, useFunnel } from "../index";

export default function FunnelTeaser() {
  let navigate = useNavigate();
  const onSubmit = () => {
    navigate(`/funnel/${123456}`);
  }
  const { stepData, currentStep, updateAnswer, updateStep } = useFunnel("123456", onSubmit, true);
  

  const handleClick = (answer) => {
    updateAnswer(answer);
    // updateStep(2);
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
          onClick={handleClick}
        />
      )}
    </>
  );
}
