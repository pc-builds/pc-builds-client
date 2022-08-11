import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  height: ${({ fullHeight }) => fullHeight ? "100%" : "auto"};

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
