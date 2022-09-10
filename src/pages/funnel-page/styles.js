import styled from 'styled-components';
import { Card } from '../../components-stateless';
import { theme } from '../../utils';


export const DesktopFunnelWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  ${theme.screens.lt_lg} {
    display: none;
  }
`;

export const StyledCard = styled(Card)`
  height: 80vh;
  padding: 25px 50px;
`;

export const MobileFunnelWrapper = styled.div`
  height: 100%;

  ${theme.screens.gt_lg} {
    display: none;
  }
`;