import React from "react";
import { SpaceBetween } from "../../components-stateless";
import {FunnelCompletion} from "./index";

export default function FunnelHead({ stepData, completion }) {
  return (
    <>
      <SpaceBetween>
        <h4>
          {stepData.step}
          {". "}
          {stepData.question}
        </h4>
        <FunnelCompletion completion={completion}/>
      </SpaceBetween>
    </>
  );
}
