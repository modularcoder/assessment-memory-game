import React, { useState } from 'react'
import { GameCardItem } from '../_types'
import { useGameCardsData } from './_hooks/useGameCardsData'
import { useGame } from './_hooks/useGame'
import Game from './Game'

export default function GameContainer() {
  const [gridSize, setGridSize] = useState(4)
  const { cardsData, isLoading, error, fetchData } = useGameCardsData(gridSize)
  const { cards, toggleCard, gameStatus, movesCount } = useGame(cardsData)

  const handleReload = () => {
    fetchData()
  }

  const handleCardClick = (card: GameCardItem) => {
    if (gameStatus !== 'started') {
      return false
    }

    toggleCard(card)
  }

  const handleChangeGridSize = (gridSize: number) => {
    setGridSize(gridSize)
  }

  return (
    <Game
      cards={cards}
      gridSize={gridSize}
      error={error}
      gameStatus={gameStatus}
      movesCount={movesCount}
      isLoading={isLoading}
      onReload={handleReload}
      onChangeGridSize={handleChangeGridSize}
      onCardClick={handleCardClick}
    />
  )
}
