import styled from "styled-components";
import { theme } from "../../utils/theme";

export const GridContainer = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) =>
    theme.screens.lt_xs &&
    ` 
      ${styles}
    `,
};

export const GridItem = styled.div`
  flex: ${({ size }) => size};

  ${({ collapse }) =>
    collapse &&
    media[collapse](`
    display: none;
  `)};
`;
