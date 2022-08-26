import React from "react";
import { Funnel } from "../../components";
import { Distance, Section } from "../../components-stateless";
import { theme } from "../../utils";

export default function FunnelPage() {
  return (
    <>
      <Section background={theme.colors.bg.main} fullHeight>
        {/* <div style={{ display: "flex", height: "100%", alignItems: "center" }}> */}
          {/* <div style={{ height: "100%" }}> */}
            <Funnel />
          {/* </div> */}
        {/* </div> */}
      </Section>
    </>
  );
}
