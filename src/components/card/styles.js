import styled, { css } from "styled-components";
import { theme } from "../../utils";

export const CardWrapper = styled.div`
  height: 100%;
  background: ${({ bg }) => bg || theme.colors.bg.main};
  border-radius: ${({ rounded }) => rounded && "20px"};
  box-shadow: ${({ elevated }) => elevated && "0 6px 18px 0 rgb(0 0 0 / 10%)"};

  // TODO : flytta hover styles till component som wrappar items som är selectable eller liknande
  // snarare än att card ska ha det på sig.

  ${({ hover }) =>
    hover &&
    css`
      border: solid 1px transparent;
      &:hover {
        border: solid 1px ${hover}
      }
    `}
`;
