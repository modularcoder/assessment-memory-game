import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'

import GameCard from './GameCard'

const meta: Meta<typeof GameCard> = {
  title: 'Game/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof GameCard>

const DEFAULT_IMAGE_URL = 'https://picsum.photos/id/200/600'

const Container = styled.div`
  width: 160px;
`

const TemplateDefault = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleOnClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Container>
      <GameCard
        isFlipped={isFlipped}
        imageUrl={DEFAULT_IMAGE_URL}
        onClick={handleOnClick}
      />
    </Container>
  )
}

export const Default: Story = {
  render: () => <TemplateDefault />,
}

export const NotFlipped: Story = {
  render: () => (
    <Container>
      <GameCard imageUrl={DEFAULT_IMAGE_URL} isFlipped={false} />
    </Container>
  ),
}

export const Flipped: Story = {
  render: () => (
    <Container>
      <GameCard imageUrl={DEFAULT_IMAGE_URL} isFlipped={true} />
    </Container>
  ),
}

export const Solved: Story = {
  render: () => (
    <Container>
      <GameCard imageUrl={DEFAULT_IMAGE_URL} isSolved={true} isFlipped={true} />
    </Container>
  ),
}
