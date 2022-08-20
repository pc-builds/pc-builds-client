import React from "react";
import { Container, FlexContainer } from "../../components-stateless";
import { FunnelSlice } from "./index";

export default function FunnelBody({ stepData }) {
  return (
    <>
      <FlexContainer style={{ flexGrow: 2 }} alignItems="center">
        <Container py={35}>
          {stepData && (
            <FunnelSlice
              sliceType={stepData.sliceType}
              options={stepData.options}
              //   onClick={handleClick}
            />
          )}
        </Container>
      </FlexContainer>
    </>
  );
}
