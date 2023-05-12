import React from 'react'
import styled from 'styled-components'
import { GameCardItem } from '../../../_types'
import GameCard from '../GameCard/GameCard'

export type GameBoardProps = {
  cards: GameCardItem[]
  gridSize: number
  onCardClick?: (card: GameCardItem) => void
}

const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  gridSize,
  onCardClick,
}) => {
  const handleGameCardClick = (card: GameCardItem) => {
    onCardClick && onCardClick(card)
  }

  return (
    <GameBoardWrapper gridSize={gridSize}>
      {cards.map((card, index) => (
        <GameCard
          imageUrl={card.imageUrl}
          key={index}
          isFlipped={card.isActive || card.isSolved}
          isSolved={card.isSolved}
          onClick={() => handleGameCardClick(card)}
        />
      ))}
    </GameBoardWrapper>
  )
}

const GameBoardWrapper = styled.div<Partial<GameBoardProps>>`
  width: 100%;
  max-width: 560px;
  display: grid;
  gap: 2%;
  grid-template-columns: repeat(${(props) => props.gridSize}, 1fr);
`

export default GameBoard
