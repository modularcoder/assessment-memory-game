import React from 'react'
import styled from 'styled-components'
import BaseButton from '../../../_components/BaseButton/BaseButton'

type Props = {
  onReloadClick: () => void
}

const GameNavbar: React.FC<Props> = (props: Props) => {
  return (
    <GameNavbarWrapper>
      <GameNavbarTitle>MemoGame</GameNavbarTitle>
      <BaseButton onClick={props.onReloadClick}>Reload Game</BaseButton>
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

const GameNavbarWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
  background: #1f2937;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`

export default GameNavbar
