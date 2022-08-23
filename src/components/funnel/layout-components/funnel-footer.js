import React from "react";
import {
  Container,
  SpaceBetween,
  Button,
  FlexItem,
} from "../../../components-stateless";
import { theme } from "../../../utils";

export default function FunnelFooter({ updateStep, currentStep, completion }) {
  return (
    <>
      <Container py={35}>
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
            fullWidth
            maxWidth="150px"
            onClick={() => {
              completion === 100
                ? alert("fucktard alert!")
                : updateStep(currentStep + 1);
            }}
          >
            {completion === 100 ? "Slutför" : "Nästa"}
          </Button>
        </SpaceBetween>
      </Container>
    </>
  );
}
