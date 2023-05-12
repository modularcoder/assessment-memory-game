import React from 'react'
import { GameCard } from '../_types'

export type GameProps = {
  cards: GameCard[]
  gridSize: number
  onReload: () => void
  onChangeGridSize: (gridSize: number) => void
  onCardClick: (card: GameCard) => void
}

const Game: React.FC<GameProps> = ({ cards, onCardClick }) => {
  return <div>{JSON.stringify(cards)}</div>
}

export default Game
