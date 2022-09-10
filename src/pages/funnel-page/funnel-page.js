import React from "react";
import { Funnel } from "../../components";
import { Section } from "../../components-stateless";
import { theme } from "../../utils";
import { DesktopFunnelWrapper, MobileFunnelWrapper, StyledCard } from "./index";

export default function FunnelPage() {
  return (
    <>
      <Section background={theme.colors.bg.main} fullHeight>
        <DesktopFunnelWrapper elevated rounded>
          <StyledCard elevated rounded>
            <Funnel />
          </StyledCard>
        </DesktopFunnelWrapper>

        <MobileFunnelWrapper>
          <Funnel />
        </MobileFunnelWrapper>
      </Section>
    </>
  );
}
