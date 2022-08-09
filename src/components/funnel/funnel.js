import React from "react";
import {
  Distance,
  GridContainer,
  GridItem,
  TextBase,
} from "../../components-stateless";
import { theme } from "../../utils/theme";
import { Card } from "../index";

export default function Funnel() {
  return (
    <>
      <Distance size="60">
        <div style={{ textAlign: "center" }}>
          <h2>Beskriv ditt behov</h2>
          <TextBase>
            Svara på frågorna nedan så kommer vi ge dig förslag på en dator som
            passar dig.
          </TextBase>
        </div>
        <Distance size="20" />
        <GridContainer>
          <GridItem size={1}>
            <Card elevated rounded>
              <TextBase disableTopGutter>
                MFF gggg gggggggg ggg g gg gggggg ggg gggggg gggggg ggggg ggggg
                ggggggggg
              </TextBase>
            </Card>
          </GridItem>
          <GridItem size={1}>
            <Card elevated rounded>
              <TextBase disableTopGutter>
                MFF gggg gggggggg ggg g gg gggggg ggg gggggg gggggg ggggg ggggg
                ggggggggg
              </TextBase>
            </Card>
          </GridItem>
          <GridItem size={1}>
            <Card elevated rounded>
              <TextBase disableTopGutter>
                MFF gggg gggggggg ggg g gg gggggg ggg gggggg gggggg ggggg ggggg
                ggggggggg
              </TextBase>
            </Card>
          </GridItem>
        </GridContainer>
      </Distance>
    </>
  );
}
