import React from 'react'
import { Container, FlexContainer, H5, MediaCard, SpaceBetween } from '../../components-stateless'
import { BuildCardImage } from './styles'

export default function HorizontalBuildCard({ build }) {
  return (
    <MediaCard
      image={
        <BuildCardImage src={build.images[0]} />
      }
    >
      <Container py="24px" pr="24px" fullHeight>
      <FlexContainer flexDirection="column" gap="24" height="100%" justifyContent="space-between">
        <H5>{build.name}</H5>
          <SpaceBetween>
          <span>Från. 21 306kr</span>
            <span style={{ color: "steelblue", textDecoration: "underline"}}>Läs mer</span>
          </SpaceBetween>
      </FlexContainer>
      </Container>
    </MediaCard>
  )
  
}
