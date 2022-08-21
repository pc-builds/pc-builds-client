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

  ${({ centerAlignContent }) =>
    centerAlignContent &&
    css`
      margin: 0px auto;
    `}
  
  ${({ px }) =>
    px &&
    (resolveBreakpointStyles(px, ["padding-left", "padding-right"]) ||
      css`
        padding-left: ${px}px;
        padding-right: ${px}px;
      `)}

  ${({ py }) =>
    py &&
    (resolveBreakpointStyles(py, ["padding-top", "padding-bottom"]) ||
      css`
        padding-top: ${py}px;
        padding-bottom: ${py}px;
      `)}
`;

export const Container = styled(ContainerBase)``;
