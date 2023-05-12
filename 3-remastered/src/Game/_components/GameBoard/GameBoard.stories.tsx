import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import cardsService, { generateCards } from '../../../_services/cardsService'
import { type GameCardItem } from '../../../_types'

import GameBoard from './GameBoard'

const cardsInitial: GameCardItem[] = generateCards(4).map((imageId, index) => ({
  index,
  imageId,
  imageUrl: `https://picsum.photos/id/${imageId}/600`,
  isSolved: Boolean(Math.round(Math.random())),
  isActive: false,
}))

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
  const [cards, setCards] = useState(cardsInitial)

  const handleCardClick = (clickedCard: GameCardItem) => {
    setCards(
      cards.map((card) => {
        return {
          ...card,
        }
      })
    )
  }

  return (
    <Container>
      <GameBoard cards={cards} gridSize={4} onCardClick={handleCardClick} />
    </Container>
  )
}

export const Default: Story = {
  render: () => <TemplateDefault />,
}
