import React from "react";
import { useParams } from "react-router-dom";
import { SpaceBetween } from "../../components-stateless";
import { Card } from "../index";
import { useFunnel, FunnelHead, FunnelBody } from "./index";

export default function Funnel() {
  let { id } = useParams();

  const { stepData, currentStep, updateAnswer, updateStep, completion } = useFunnel(id);

  return (
    <>
      <Card elevated rounded style={{ padding: "24px", height: "80vh" }}>
        <FunnelHead stepData={stepData} completion={completion}/>
        <FunnelBody stepData={stepData}/>
      </Card>
    </>
  );
}
