import React from "react";
import styled, { css } from "styled-components";
import { Container, H5, MediaCard } from "../../../components-stateless";
import { theme } from "../../../utils";

const CardWrapper = styled.div`
  border: solid 1px transparent;
  height: 120px;
  border-radius: 20px;

  ${({ active }) =>
    active &&
    css`
      border: solid 1px ${theme.colors.bg.accent};
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function ImageOptionCard({ title, image, active }) {

  return (
    <>
      <CardWrapper active={active}>
        <MediaCard image={
          <Image src={image} />
        }
        >
          <Container alignText="center" py="32px" px="24px">
            <H5 fontWeight={theme.font.weight.medium}>{title}</H5>
          </Container>
        </MediaCard>
      </CardWrapper>
    </>
  );
}
