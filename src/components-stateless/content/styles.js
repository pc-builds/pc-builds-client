import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Content = styled.div`
  /* width: 100%; */
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1300px;

  ${theme.screens.gt_md} {
    padding-left: 34px;
    padding-right: 34px;
  }
`;
