import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  height: 100%;

  ${({ alignItems }) =>
    alignItems && `
    align-items: ${alignItems};
  `}

${({ flexDirection }) =>
    flexDirection && `
    flex-direction: ${flexDirection};
  `}
`;

export const SpaceBetween = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
`;
