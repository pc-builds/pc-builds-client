import React from "react";
import { Container, FlexContainer } from "../../../components-stateless";
import { FunnelSlice } from "../index";

export default function FunnelBody({ stepData, updateAnswer, answer }) {

  const handleClick = (answer) => {
    updateAnswer(answer)
  }

  return (
    <>
      <FlexContainer style={{ flexGrow: 2 }} alignItems="center">
        <Container py={35}>
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
