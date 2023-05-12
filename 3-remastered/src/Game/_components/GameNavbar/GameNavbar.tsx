import React from 'react'
import styled from 'styled-components'
import BaseButton from '../../../_components/BaseButton/BaseButton'

import { GameStatus } from '../../../_types'

type Props = {
  isLoading: boolean
  gameStatus: GameStatus
  movesCount: number
  onReloadClick: () => void
}

const GameNavbar: React.FC<Props> = ({
  isLoading,
  gameStatus,
  movesCount,
  onReloadClick,
}) => {
  return (
    <GameNavbarWrapper>
      <GameNavbarTitle>MemoGame</GameNavbarTitle>
      <GameNavbarMessage>
        {gameStatus === 'starting' && 'Cards are closing in 5 seconds!'}
        {gameStatus === 'started' && `${movesCount} moves made`}
        {gameStatus === 'ended' && `Yuhooo, you won!`}
      </GameNavbarMessage>
      <BaseButton disabled={isLoading} onClick={onReloadClick}>
        Reload Game
      </BaseButton>
    </GameNavbarWrapper>
  )
}

const GameNavbarTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 0;
  cursor: default;
  user-select: none;
`

const GameNavbarMessage = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  color: #d1d5db;
`

const GameNavbarWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  margin-bottom: 30px;
  background: #1f2937;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`

export default GameNavbar
