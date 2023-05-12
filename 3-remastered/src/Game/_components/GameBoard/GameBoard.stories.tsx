import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { generateCards } from '../../../_services/cardsService'

import GameBoard from './GameBoard'

const cardsIdsInitial = generateCards(4)

const cardItems = cardsIdsInitial.map((imageId, index) => {
  return {
    index,
    imageId,
    imageUrl: `https://picsum.photos/id/${imageId}/600`,
    isSolved: false,
    isActive: true,
  }
})

const meta: Meta<typeof GameBoard> = {
  title: 'Game/GameBoard',
  component: GameBoard,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof GameBoard>

const DEFAULT_IMAGE_URL = 'https://picsum.photos/id/200/600'

const Container = styled.div`
  width: 70%;
`

const TemplateDefault = () => {
  return (
    <Container>
      <GameBoard gameStatus={'started'} cards={cardItems} gridSize={4} />
    </Container>
  )
}

export const Default: Story = {
  render: () => <TemplateDefault />,
}
