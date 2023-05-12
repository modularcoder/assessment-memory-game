import React from 'react'
import { GameCardItem } from '../_types'

export type GameProps = {
  cards: GameCardItem[]
  gridSize: number
  onReload: () => void
  onChangeGridSize: (gridSize: number) => void
  onCardClick: (card: GameCardItem) => void
}

const Game: React.FC<GameProps> = ({ cards, onCardClick }) => {
  return <div>{JSON.stringify(cards)}</div>
}

export default Game
