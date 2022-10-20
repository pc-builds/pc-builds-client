import React from 'react'
import { HorizontalBuildCard, VerticalBuildCard } from './index'
import { GridContainer, GridItem } from '../../components-stateless'

export default function Builds({ builds }) {
  return (
    <>
      <GridContainer xs={1} sm={1} md={2} lg={3} gap={16}>
        {builds &&
          builds.map((build) => (
            <GridItem
              key={build.name}
              onClick={() => alert("hello!")}
            >
              <HorizontalBuildCard build={build} />
              {/* <VerticalBuildCard build={build}/> */}
            </GridItem>
          ))}
      </GridContainer>
    </>
  )
}
