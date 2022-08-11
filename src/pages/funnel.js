import React from "react";
import { Card } from "../components";
import { Distance, Section, SpaceBetween } from "../components-stateless";
import { theme } from "../utils";

export default function Funnel() {
  return (
    <>
      <Section background={theme.colors.bg.contrast}>
        <Distance size="120">
        <Card elevated rounded style={{ padding: "24px", height: "80vh"}}>
          <SpaceBetween>
            <h4>Vad kommer du använda din dator till?</h4>
            <div>
              <div
                style={{
                  height: "10px",
                  width: "300px",
                  borderRadius: "20px",
                  background: "lightGrey",
                }}
              >
                <div style={{ width: "40%", height: "100%", background: "green", borderRadius: "20px"}}>

                </div>
              </div>
            </div>
          </SpaceBetween>
        </Card>
        </Distance>
      </Section>
    </>
  );
}
