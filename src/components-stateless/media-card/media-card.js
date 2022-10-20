import React from 'react'
import { Card } from '../card'
import { CardContent, CardMedia, Wrapper } from './index'

export default function MediaCard({ image, children, vertical }) {
  return (
    <Card rounded elevated clickable >
      <Wrapper alignItems="center" height="100%" vertical={vertical}>
        <CardMedia>
          {image}
        </CardMedia>
        <CardContent>
          {children}
        </CardContent>
      </ Wrapper>
    </Card>
  )
}
