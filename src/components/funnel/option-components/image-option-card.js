import React from "react";
import styled, { css } from "styled-components";
import { Container, H5, TextBase, Card, FlexContainer } from "../../../components-stateless";
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
export default function ImageOptionCard({ title, image, active }) {

  return (
    <>
      <CardWrapper elevated rounded clickable active={active} style={{ height: "120px"}}>
        <FlexContainer alignItems="center" style={{ height: "100%", borderRadius: "20px"}}>
          <div style={{ width: "30%", height: "100%",overflow: "hidden", borderRadius: "20px 0px 0px 20px"}}>
            <img style={{ width: "100%", height: "100%", objectFit: "cover"}} alt="shut up" src={image} />
          </div>
          <Container alignText="center" py="32px" px="24px" style={{ width: "70%"}}>
            <H5 fontWeight={theme.font.weight.medium}>{title}</H5>
          </Container>
        </FlexContainer>
      </CardWrapper>
    </>
  );
}
