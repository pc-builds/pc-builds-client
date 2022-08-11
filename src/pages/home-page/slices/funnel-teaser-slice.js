import React from "react";
import { FunnelTeaser } from "../../../components";
import {
  Container,
  Distance,
  H3,
  TextBase,
} from "../../../components-stateless";

export default function FunnelTeaserSlice() {
  return (
    <>
      <Distance size="60">
        <Container alignText="center">
          <H3>Beskriv ditt behov</H3>
          <Container maxWidth={500} centerAlignContent alignText="center">
            <TextBase>
              Svara på några frågor kring ditt behov så kommer vi göra vårat
              bästa att hitta det som passar dig.
            </TextBase>
          </Container>
        </Container>

        <Distance size="40"/>
        <FunnelTeaser />
        <Distance size="20"/>

      </Distance>
    </>
  );
}
