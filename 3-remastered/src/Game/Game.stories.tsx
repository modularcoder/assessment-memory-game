import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { generateCards } from '../_services/cardsService'

import Game from './Game'

const cardsIdsInitial = generateCards(4)

const cardItemsStarting = cardsIdsInitial.map((imageId, index) => {
  return {
    index,
    imageId,
    imageUrl: `https://picsum.photos/id/${imageId}/600`,
    isSolved: false,
    isActive: true,
  }
})

const cardItemsStarted = cardsIdsInitial.map((imageId, index) => {
  return {
    index,
    imageId,
    imageUrl: `https://picsum.photos/id/${imageId}/600`,
    isSolved: false,
    isActive: false,
  }
})

const cardItemsEnded = cardsIdsInitial.map((imageId, index) => {
  return {
    index,
    imageId,
    imageUrl: `https://picsum.photos/id/${imageId}/600`,
    isSolved: true,
    isActive: false,
  }
})

const GAME_ERROR = new Error('Something went wrong')

const meta: Meta<typeof Game> = {
  title: 'Game/Game',
  component: Game,
}
export default meta

type Story = StoryObj<typeof Game>

export const GameLoading: Story = {
  render: () => (
    <Game
      cards={[]}
      gridSize={4}
      gameStatus={'starting'}
      isLoading={true}
      movesCount={0}
      onReload={() => {}}
      onChangeGridSize={() => {}}
      onCardClick={() => {}}
    />
  ),
}

export const GameLoadingError: Story = {
  render: () => (
    <Game
      cards={[]}
      error={GAME_ERROR}
      gridSize={4}
      gameStatus={'starting'}
      isLoading={false}
      movesCount={0}
      onReload={() => {}}
      onChangeGridSize={() => {}}
      onCardClick={() => {}}
    />
  ),
}

export const GameStarting: Story = {
  render: () => (
    <Game
      cards={cardItemsStarting}
      gridSize={4}
      gameStatus={'starting'}
      isLoading={false}
      movesCount={0}
      onReload={() => {}}
      onChangeGridSize={() => {}}
      onCardClick={() => {}}
    />
  ),
}

export const GameStarted: Story = {
  render: () => (
    <Game
      cards={cardItemsStarted}
      gridSize={4}
      gameStatus={'started'}
      isLoading={false}
      movesCount={14}
      onReload={() => {}}
      onChangeGridSize={() => {}}
      onCardClick={() => {}}
    />
  ),
}

export const GameEnded: Story = {
  render: () => (
    <Game
      cards={cardItemsEnded}
      gridSize={4}
      gameStatus={'ended'}
      isLoading={false}
      movesCount={14}
      onReload={() => {}}
      onChangeGridSize={() => {}}
      onCardClick={() => {}}
    />
  ),
}

// export const GameStarting: Story = {
//   render: () => (
//     <Game
//       gameStatus={'starting'}
//       isLoading={false}
//       movesCount={0}
//       onReload={() => {}}
//     />
//   ),
// }

// export const GameStarted: Story = {
//   render: () => (
//     <Game
//       gameStatus={'started'}
//       isLoading={false}
//       movesCount={14}
//       onReload={() => {}}
//     />
//   ),
// }

// export const GameEnded: Story = {
//   render: () => (
//     <Game
//       gameStatus={'ended'}
//       isLoading={false}
//       movesCount={14}
//       onReload={() => {}}
//     />
//   ),
// }
