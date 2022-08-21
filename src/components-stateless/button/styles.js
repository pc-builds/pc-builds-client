import styled, { css } from "styled-components";
import { theme } from "../../utils";

export const Button = styled.button`
  background: ${({ bg }) => bg || theme.colors.bg.accent};
  color: ${({ color }) => color || theme.colors.button.text.main};
  font-weight: ${theme.font.weight.medium};
  font-family: ${theme.font.family.main};
  font-size: 14px;
  appearance: none;
  border: none;
  padding: 0px 24px;
  border-radius: 20px;
  height: 32px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ outlined }) =>
    outlined &&
    css`
      background: none;
      border: 1px solid ${outlined};
    `};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};
`;
