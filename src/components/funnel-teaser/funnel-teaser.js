import React from "react";
import {
  Container,
  Distance,
  GridContainer,
  GridItem,
  H2,
  H3,
  H4,
  H5,
  TextBase,
} from "../../components-stateless";
import { theme } from "../../utils";
import { Card } from "../index";

export default function FunnelTeaser() {
  return (
    <>
      <H4 alignText="center">1. Vilkent typ av dator?</H4>
      <Distance size="15" />
      <GridContainer xs={1} sm={2} md={3} gap={16}>
        <GridItem>
          <Card elevated rounded hover="green">
            <Container alignText="center" py={32} px={24}>
              <H5 fontWeight={theme.font.weight.medium}>Komponent bygge</H5>
              <TextBase smallerText>
                Köp varje ingående del för sig och sätt ihop den på egen hand.
                Kräver lite erfarenhet eller kanske en hjälpande hand.
              </TextBase>
            </Container>
          </Card>
        </GridItem>
        <GridItem>
          <Card elevated rounded hover="green">
            <Container alignText="center" py={32} px={24}>
              <H5 fontWeight={theme.font.weight.medium}>Komplett-PC</H5>
              <TextBase smallerText>
                Precis hur det låter, datoren är byggd hos leverantör och är
                redo att användas direkt vid unboxing!
              </TextBase>
            </Container>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
