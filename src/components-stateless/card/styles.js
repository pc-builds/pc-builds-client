import styled, { css } from "styled-components";
import { theme } from "../../utils";


export const Card = styled.div`
  height: 100%;
  background: ${({ bg }) => bg || theme.colors.bg.main};
  border-radius: ${({ rounded }) => rounded && "20px"};
  box-shadow: ${({ elevated }) => elevated && "0 6px 18px 0 rgb(0 0 0 / 10%)"};

    ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`;
