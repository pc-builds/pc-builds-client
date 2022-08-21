import React from "react";
import { Container, SpaceBetween, Button } from "../../../components-stateless";
import { theme } from "../../../utils";

export default function FunnelFooter({ updateStep, currentStep }) {
  return (
    <>
      <Container py={35}>
        <SpaceBetween gap={25}>
          <Button
            fullWidth
            maxWidth="150px"
            outlined={theme.colors.button.border.main}
            color={theme.colors.button.text.alt}
            onClick={() => updateStep(currentStep - 1)}
          >
            Föregående
          </Button>

          <Button
            fullWidth
            maxWidth="150px"
            onClick={() => updateStep(currentStep + 1)}
          >
            Nästa
          </Button>
        </SpaceBetween>
      </Container>
    </>
  );
}
