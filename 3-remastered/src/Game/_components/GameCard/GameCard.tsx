import React from 'react'
import styled from 'styled-components'

export type GameCardProps = {
  imageUrl: string
  isClickable: boolean
  isFlipped?: boolean
  isSolved?: boolean
  onClick?: () => void
}

const GameCard: React.FC<GameCardProps> = ({
  isClickable,
  isSolved,
  isFlipped,
  imageUrl,
  onClick,
}) => {
  const handleCardClick = () => {
    isClickable && onClick && onClick()
  }

  return (
    <GameCardWrapper
      isSolved={isSolved}
      isFlipped={isFlipped}
      isClickable={isClickable}
      onClick={handleCardClick}
    >
      <GameCardInner isSolved={isSolved} isFlipped={isFlipped}>
        <GameCardFront />
        <GameCardImage isSolved={isSolved} imageUrl={imageUrl} />
      </GameCardInner>
    </GameCardWrapper>
  )
}

//
const GameCardWrapper = styled.div<Partial<GameCardProps>>`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  box-sizing: border-box;
  perspective: 500px;
  transition: opacity 0.8s ease;

  ${(props) => props.isClickable && 'cursor: pointer;'}
  ${(props) => props.isSolved && 'opacity: 0.5;'};
`

const GameCardInner = styled.div<Partial<GameCardProps>>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  border-radius: 6px;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => (props.isSolved ? '#4ade80' : '#f1f5f9')};
  background: '#fff';
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.8s ease, border-color 0.8s ease, opacity 0.8s ease;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg);' : 'none')};
`

const GameCardFront = styled.div`
  position: absolute;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  background: #fefce8;
  backface-visibility: hidden;
`
const GameCardImage = styled.div<Partial<GameCardProps>>`
  position: absolute;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: all 0.8s ease;
`

export default GameCard
