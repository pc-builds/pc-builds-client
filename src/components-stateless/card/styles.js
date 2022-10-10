import styled, { css } from "styled-components";
import { theme } from "../../utils";


export const Card = styled.div`
  height: 100%;
  background: ${({ bg }) => bg || theme.colors.bg.main};
  border-radius: ${({ rounded }) => rounded && "20px"};
  box-shadow: ${({ elevated }) => elevated && "0 1px 3px -1px rgb(0 0 0 / 40%)"};

    ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`;
