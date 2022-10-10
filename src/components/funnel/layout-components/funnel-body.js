import React from "react";
import { Container, FlexContainer } from "../../../components-stateless";
import { FunnelSlice } from "../index";

export default function FunnelBody({ stepData, updateAnswer, answer }) {
  const handleClick = (value) => {
    const existingAnswer = answer.includes(value);
    updateAnswer(value, existingAnswer);
  };

  return (
    <>
      <FlexContainer alignItems="center" id="bajs">
        <Container py="35px" fullWidth>
          {stepData && (
            <FunnelSlice
              sliceType={stepData.sliceType}
              options={stepData.options}
              answer={answer}
              onClick={handleClick}
            />
          )}
        </Container>
      </FlexContainer>
    </>
  );
}
