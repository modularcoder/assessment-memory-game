import React from 'react'
import styled from 'styled-components'
import { GameCardItem } from '../_types'

import GameNavbar from './_components/GameNavbar/GameNavbar'
import GameBoard from './_components/GameBoard/GameBoard'

export type GameProps = {
  cards: GameCardItem[]
  gridSize: number
  onReload: () => void
  onChangeGridSize: (gridSize: number) => void
  onCardClick: (card: GameCardItem) => void
}

const Game: React.FC<GameProps> = ({
  cards,
  gridSize,
  onReload,
  onCardClick,
}) => {
  const handleCardClick = (card: GameCardItem) => {
    onCardClick(card)
  }

  return (
    <GameWrapper>
      <GameNavbar onReloadClick={() => onReload()} />
      <GameBoard
        cards={cards}
        gridSize={gridSize}
        onCardClick={handleCardClick}
      />
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Game
