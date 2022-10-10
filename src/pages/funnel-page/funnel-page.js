import React from "react";
import { Funnel } from "../../components";
import { Section } from "../../components-stateless";
import { theme } from "../../utils";

export default function FunnelPage() {
  return (
    <>
      <Section background={theme.colors.bg.main} fullHeight>
        <Funnel />
      </Section>
    </>
  );
}
