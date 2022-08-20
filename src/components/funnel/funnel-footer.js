import React from "react";
import { Container, SpaceBetween } from "../../components-stateless";

export default function FunnelFooter({ updateStep }) {
  return (
    <>
      <Container px={25} py={35}>
        <SpaceBetween>
          <button>Bakåt</button>
          <button onClick={() => updateStep(2)}>nästa</button>
        </SpaceBetween>
      </Container>
    </>
  );
}
