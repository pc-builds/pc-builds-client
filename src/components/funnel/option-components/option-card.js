import React from "react";
import styled, { css } from "styled-components";
import { Container, H5, TextBase, Card } from "../../../components-stateless";
import { theme } from "../../../utils";

const CardWrapper = styled(Card)`
  border: solid 1px transparent;
  /* &:hover {
    border: solid 1px ${theme.colors.bg.accent};
  } */

  ${({ active }) =>
    active &&
    css`
      border: solid 1px ${theme.colors.bg.accent};
    `}
`;
export default function OptionCard({ title, description, active }) {

  return (
    <>
      <CardWrapper elevated rounded clickable active={active}>
        <Container alignText="center" py="32px" px="24px">
          <H5 fontWeight={theme.font.weight.medium}>{title}</H5>
          <TextBase smallerText>{description}</TextBase>
        </Container>
      </CardWrapper>
    </>
  );
}
