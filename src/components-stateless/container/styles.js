import styled, { css } from "styled-components";
import { resolveBreakpointStyles } from "../../utils/helpers";

export const ContainerBase = styled.div`
  background-color: ${({ bg }) => bg || "transparent"};
  text-align: ${({ alignText }) => alignText || "left"};
  max-width: ${({ maxWidth }) => (maxWidth && `${maxWidth}px`) || "none"};

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}

  ${({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `}

  ${({ centerAlignContent }) =>
    centerAlignContent &&
    css`
      margin: 0px auto;
    `}

  ${({ pl }) =>
  pl &&
  (resolveBreakpointStyles(pl, ["padding-left"]) ||
    css`
      padding-left: ${pl};
    `)}

  ${({ pr }) =>
  pr &&
  (resolveBreakpointStyles(pr, ["padding-rightß"]) ||
    css`
      padding-right: ${pr};
    `)}
  
  ${({ px }) =>
    px &&
    (resolveBreakpointStyles(px, ["padding-left", "padding-right"]) ||
      css`
        padding-left: ${px};
        padding-right: ${px};
      `)}

  ${({ py }) =>
    py &&
    (resolveBreakpointStyles(py, ["padding-top", "padding-bottom"]) ||
      css`
        padding-top: ${py};
        padding-bottom: ${py};
      `)}
`;

export const Container = styled(ContainerBase)``;
