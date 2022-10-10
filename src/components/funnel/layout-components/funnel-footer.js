import React from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import {
  SpaceBetween,
  Button,
  FlexItem,
} from "../../../components-stateless";
import { theme } from "../../../utils";
import { FunnelFooterWrapper } from "../styles";

export default function FunnelFooter({
  updateStep,
  currentStep,
  completion,
  answer,
  answers,
}) {

  const navigate = useNavigate();

  const navigateToResultPage = () => {
    const resultObject = {};
    const flattendAnswers = Object.values(answers.answers).flat();

    flattendAnswers.forEach((a) =>
    resultObject[a.property] = !!resultObject[a.property] ? [...resultObject[a.property], a.value] : [a.value]);
    navigate({
      pathname: `results`,
      search: `?${new URLSearchParams(resultObject).toString()}`,
    });
  }

  return (
    <>
      <FunnelFooterWrapper py="35px" px="24px">
        <SpaceBetween gap={25}>
          {currentStep !== 1 && (
            <Button
              fullWidth
              maxWidth="150px"
              outlined={theme.colors.button.border.main}
              color={theme.colors.button.text.alt}
              onClick={() => updateStep(currentStep - 1)}
            >
              Föregående
            </Button>
          )}

          <FlexItem flexGrow={1} />

          <Button
            disabled={answer.length <= 0}
            fullWidth
            maxWidth="150px"
            onClick={() => {
              completion === 100
                ? navigateToResultPage()
                : updateStep(currentStep + 1);
            }}
          >
            {completion === 100 ? "Slutför" : "Nästa"}
          </Button>
        </SpaceBetween>
      </FunnelFooterWrapper>
    </>
  );
}
