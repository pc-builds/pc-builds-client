import styled from "styled-components";
import { resolveBreakpointStyles } from "../../utils/helpers";

export const FlexContainer = styled.div`
  display: flex;

  ${({ gap }) =>
    gap && `
    gap: ${gap}px;
  `}

  ${({ height }) =>
    height && `
    height: ${height};
  `}

  ${({ alignItems }) =>
    alignItems && `
    align-items: ${alignItems};
  `}

  ${({ flexDirection }) =>
    flexDirection &&
    (resolveBreakpointStyles(flexDirection, ["flex-direction"]) ||
      `flex-direction: ${flexDirection}`)
  }
`;

export const FlexItem = styled.div`
  ${({ flexGrow }) =>
    flexGrow && `
    flex-grow: ${flexGrow};
  `}

`;

export const SpaceBetween = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
`;
