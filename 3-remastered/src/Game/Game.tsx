import React from 'react'
import styled from 'styled-components'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { GameCardItem, GameStatus } from '../_types'

import GameNavbar from './_components/GameNavbar/GameNavbar'
import GameBoard from './_components/GameBoard/GameBoard'

export type GameProps = {
  cards: GameCardItem[]
  gridSize: number
  isLoading: boolean
  error?: any
  movesCount: number
  gameStatus: GameStatus
  onReload: () => void
  onChangeGridSize: (gridSize: number) => void
  onCardClick: (card: GameCardItem) => void
}

const Game: React.FC<GameProps> = ({
  isLoading,
  error,
  cards,
  gridSize,
  gameStatus,
  movesCount,
  onReload,
  onCardClick,
}) => {
  const handleCardClick = (card: GameCardItem) => {
    onCardClick(card)
  }

  const { width, height } = useWindowSize()

  return (
    <GameWrapper>
      <GameNavbar
        isLoading={isLoading}
        gameStatus={gameStatus}
        movesCount={movesCount}
        onReloadClick={() => onReload()}
      />
      {cards.length > 0 && (
        <GameBoardWrapper>
          <GameBoard
            cards={cards}
            gameStatus={gameStatus}
            gridSize={gridSize}
            onCardClick={handleCardClick}
          />
        </GameBoardWrapper>
      )}
      {gameStatus === 'ended' && <Confetti width={width} height={height} />}
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
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  width: 100%;
`

const GameBoardWrapper = styled.div`
  padding: 0 16px;
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
