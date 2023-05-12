import React, {
  useEffect,
  useState,
} from 'react';

import { useGameCardsData } from '../Game/_hooks/useGameCardsData';
import { useGameCards } from '../Game/_hooks/useGameCards';

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
      <div>

      </div>
      {
        cards.map(({ imageId, index, isActive, isSolved }) => (
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
