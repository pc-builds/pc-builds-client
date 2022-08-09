import styled from 'styled-components';
import { theme } from '../../utils';

export const TextBase = styled.p`
  margin: 0px;
  margin-top: ${({ disableTopGutter }) => (disableTopGutter ? '0px' : '24px')};
  font-size: ${({ smallerText }) => (smallerText ? '14px' : '16px')};
  font-weight: ${theme.font.weight.regular};
  color: ${theme.colors.text.alt};

  ${theme.screens.gt_sm} {
    font-size: ${({ smallerText }) => (smallerText ? '16px' : '18px')};
  }
`;

export const Lead = styled(TextBase)`
  font-size: 18px;

  ${theme.screens.gt_sm} {
    font-size: 20px;
  }
`;
