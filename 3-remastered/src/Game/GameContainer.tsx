import React, { useState } from 'react'
import { GameCard } from '../_types'
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

  const handleCardClick = (card: GameCard) => {
    toggleCard(card)
  }

  const handleChangeGridSize = (gridSize: number) => {
    setGridSize(gridSize)
  }

  return (
    <Game
      cards={cards}
      gridSize={gridSize}
      onReload={handleReload}
      onChangeGridSize={handleChangeGridSize}
      onCardClick={handleCardClick}
    />
  )
}
