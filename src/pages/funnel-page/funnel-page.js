import React from "react";
import { Funnel } from "../../components";
import { Distance, Section } from "../../components-stateless";
import { theme } from "../../utils";

export default function FunnelPage() {
  return (
    <>
      <Section background={theme.colors.bg.contrast}>
        <Distance size="120">
          <Funnel />
        </Distance>
      </Section>
    </>
  );
}
