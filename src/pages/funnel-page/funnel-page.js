import React from "react";
import { Funnel } from "../../components";
import { Distance, Section } from "../../components-stateless";
import { theme } from "../../utils";

export default function FunnelPage() {
  return (
    <>
      <Section background={theme.colors.bg.contrast} fullHeight>
        <div style={{ display: "flex", height: "100%", alignItems: "center"}}>
          <Funnel />
        </div>
      </Section>
    </>
  );
}
