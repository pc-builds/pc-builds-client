import React from 'react';
import {
  Distance,
  GridContainer,
  GridItem,
  TextBase,
} from '../../components-stateless';
import { theme } from '../../utils';
import { Card } from '../index';

export default function Funnel() {
  return (
    <>
      <Distance size="60">
        <div style={{ textAlign: 'center' }}>
          <h2>Beskriv ditt behov</h2>
          <TextBase>
            Svara på frågorna nedan så kommer vi ge dig förslag på en dator som
            passar dig.
          </TextBase>
        </div>
        <Distance size="20" />
        <GridContainer xs={1} sm={2} md={3} gap={16}>
          <GridItem>
            <Card elevated rounded>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <h3>Självbygge</h3>
                <TextBase disableTopGutter smallerText>
                  Köp varje ingående del för sig och sätt ihop den på egen hand.
                  Kräver lite erfarenhet eller kanske en hjälpande hand.
                </TextBase>
              </div>
            </Card>
          </GridItem>
          <GridItem>
            <Card elevated rounded>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <h3>Färdigbygge</h3>
                <TextBase disableTopGutter smallerText>
                  Precis hur det låter, datoren är byggd hos leverantör och är
                  redo att användas direkt vid unboxing!
                </TextBase>
              </div>
            </Card>
          </GridItem>
          {/* <GridItem>
            <Card elevated rounded>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <h3>Bygga själv</h3>
                <TextBase disableTopGutter smallerText>
                  MFF gggg gggggggg ggg g gg gggggg ggg gggggg gggggg ggggg
                  ggggg ggggggggg
                </TextBase>
              </div>
            </Card>
          </GridItem> */}
        </GridContainer>
      </Distance>
    </>
  );
}
