import styled from 'styled-components';
import { theme } from '../../utils';

export const ContainerBase = styled.div`
  background: ${({ bg }) => bg || theme.colors.bg.main};
`;

export const Container = styled(ContainerBase)``;
