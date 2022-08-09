import React from "react";
import { HeroWrapper, HeroLead } from "./index";
import { Content, H1 } from "../index";

export default function Hero({ children }) {
  return (
    <>
      <HeroWrapper>
        <H1>Välkommen till Investhub</H1>
        <HeroLead>
          Detta är ett ställe för dig som gillar privatekonomi och
          investeringar. Vår vision är att bygga upp en knytpunk för smarta
          verktyg, hjälpsam informationsbank och ett härligt forum.
        </HeroLead>
        {children}
      </HeroWrapper>
    </>
  );
}
