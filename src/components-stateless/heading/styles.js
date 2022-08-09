import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";

export const HeadingBase = styled.div`
  margin: 0;
  font-weight: ${theme.font.weight.bold};
  font-family: ${theme.font.family.main};
  letter-spacing: ${theme.font.letterSpacing};
`;

export const StyledH1 = css`
  font-size: 32px;
  line-height: 1.2;

  ${theme.screens.gt_sm} {
    font-size: 48px;
    line-height: 56px;
  }

  ${theme.screens.gt_md} {
    font-size: 64px;
    line-height: 76px;
  }
`;

export const H1 = styled(HeadingBase).attrs((props) => ({
  as: props.as || "h1",
}))`
  ${StyledH1}
`;
