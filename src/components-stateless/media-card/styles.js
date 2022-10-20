import styled from "styled-components";
import { FlexContainer } from "../flex-container";

export const CardMedia = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 20px 0px 0px 20px;
`;

export const CardContent = styled.div`
  border-radius: 20px;
`;

export const Wrapper = styled(FlexContainer)`
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
  border-radius: 20px;

  & ${CardMedia} {
    width: 30%;

    ${({ vertical }) =>
    vertical && `
      width: 100%;
      height: 50%;
      border-radius: 20px 20px 0px 0px;
    `}
  }

  & ${CardContent} {
    width: 70%;
    height: 100%;

    ${({ vertical }) =>
    vertical && `
      width: 100%;
      height: 50%;
    `}
  }
`;