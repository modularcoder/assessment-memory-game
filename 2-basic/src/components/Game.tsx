import React from 'react';

import { useGameCardsData } from '../hooks/useGameCardsData';
import { useGameCards } from '../hooks/useGameCards';

import Board from './Board';
import Card from './Card';

interface Props {
  gridSize?: number;
}

function Game({ gridSize = 4 }: Props) {
  const { cardsData, isLoading, error } = useGameCardsData(gridSize)
  const { cards, toggleCard } = useGameCards(cardsData)


  const handleCardClick = (index: number) => {
    toggleCard(cards[index])
  }

  return (
    <Board>
      {isLoading && <div>
          Loading the game, please wait...
      </div>}
      {error && <div>
        {error.message} <br /><br />
        don't panic, refresh the browser :D
      </div>}
      {
        !isLoading && !error && cards.length && cards.map(({ imageId, index, isActive, isSolved }) => (
          <Card
            key={index}
            index={index}
            isSolved={isSolved}
            isFlipped={isActive || isSolved}
            gridSize={gridSize}
            imageId={imageId}
            onClick={() => handleCardClick(index)}
          />
        ))
      }
    </Board>
  )
};

export default Game;
