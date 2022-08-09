import styled from "styled-components";
import { theme } from "../../utils/theme";
import { Lead } from "../text";

export const HeroWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* @media (min-width: 768px) {
    text-align: center;
  } */
`;

export const HeroLead = styled(Lead)`
  max-width: 600px;

  ${theme.screens.gt_md} {
    max-width: 800px;
  }
`;