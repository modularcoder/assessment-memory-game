import React from 'react'
import styled from 'styled-components'
import { GameCardItem } from '../_types'

import GameNavbar from './_components/GameNavbar/GameNavbar'
import GameBoard from './_components/GameBoard/GameBoard'

export type GameProps = {
  cards: GameCardItem[]
  gridSize: number
  isLoading: boolean
  error?: any
  onReload: () => void
  onChangeGridSize: (gridSize: number) => void
  onCardClick: (card: GameCardItem) => void
}

const Game: React.FC<GameProps> = ({
  isLoading,
  error,
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
      <GameNavbar isLoading={isLoading} onReloadClick={() => onReload()} />
      {isLoading && (
        <GameLoading>
          <h3>Game is loading, please wait...</h3>
        </GameLoading>
      )}
      {error && (
        <GameError>
          <h3>Could not load the game :(</h3>
          <h4>Don't panic, press reload</h4>
        </GameError>
      )}
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

const GameLoading = styled.div`
  padding: 50px;
  text-align: center;
`

const GameError = styled.div`
  padding: 50px;
  text-align: center;
`

export default Game
