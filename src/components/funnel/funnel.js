import React from "react";
import { useParams } from "react-router-dom";
import { FlexContainer, SpaceBetween } from "../../components-stateless";
import { Card } from "../index";
import { useFunnel, FunnelHead, FunnelBody, FunnelFooter } from "./index";

export default function Funnel() {
  let { id } = useParams();

  const { stepData, currentStep, updateAnswer, updateStep, completion } =
    useFunnel(id);

  return (
    <>
      <Card elevated rounded style={{ height: "80vh"}}>
        <FlexContainer flexDirection="column" fullHeight>
          <FunnelHead stepData={stepData} completion={completion} />
          <FunnelBody stepData={stepData} />
          <FunnelFooter updateStep={updateStep}/>
        </FlexContainer>
      </Card>
    </>
  );
}
