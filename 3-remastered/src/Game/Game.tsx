import React from 'react'
import { GameCardItem } from '../_types'

import GameBoard from './_components/GameBoard/GameBoard'

export type GameProps = {
  cards: GameCardItem[]
  gridSize: number
  onReload: () => void
  onChangeGridSize: (gridSize: number) => void
  onCardClick: (card: GameCardItem) => void
}

const Game: React.FC<GameProps> = ({ cards, gridSize, onCardClick }) => {
  const handleCardClick = (card: GameCardItem) => {
    onCardClick(card)
  }

  return (
    <GameBoard
      cards={cards}
      gridSize={gridSize}
      onCardClick={handleCardClick}
    />
  )
}

export default Game
