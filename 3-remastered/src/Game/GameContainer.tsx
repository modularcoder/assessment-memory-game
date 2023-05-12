import React, { useState } from 'react'
import { GameCardItem } from '../_types'
import { useGameCardsData } from './_hooks/useGameCardsData'
import { useGameCards } from './_hooks/useGameCards'
import Game from './Game'

export default function GameContainer() {
  const [gridSize, setGridSize] = useState(4)
  const { cardsData, isLoading, error, fetchData } = useGameCardsData(gridSize)
  const { cards, toggleCard } = useGameCards(cardsData)

  const handleReload = () => {
    fetchData()
  }

  const handleCardClick = (card: GameCardItem) => {
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
      isLoading={isLoading}
      onReload={handleReload}
      onChangeGridSize={handleChangeGridSize}
      onCardClick={handleCardClick}
    />
  )
}
