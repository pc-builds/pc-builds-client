import React from 'react'
import { Container, Distance, H5, MediaCard, SpaceBetween } from '../../components-stateless'
import { BuildCardImage } from './styles'

export default function VerticalBuildCard({ build }) {
  return (
    <MediaCard
      vertical
      image={
        <BuildCardImage src={build.images[0]} />
      }
    >
      <Container py="16px" px="16px">
        <H5>{build.name}</H5>
        <Distance size="8"/>
        <SpaceBetween>
          <span>Från 21 300kr</span>
          <span style={{ textDecoration: "underline", color:"steelblue"}}>Visa mer</span>
        </SpaceBetween>
      </Container>
    </MediaCard>
  )
}
