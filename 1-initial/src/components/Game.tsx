import React, {
  useEffect,
  useState,
} from 'react';
import Board from './Board';
import Card from './Card';

interface Props {
  gridSize?: number;
}

function Game({ gridSize = 5 }: Props) {
  const [cards, setCards] = useState([])
  useEffect(() => {
      const response = fetch('/api/v2/imageIds', 5);
        setCards( (response.body as any))
      }, [])

  return (
    <Board>
      {
        cards.map((imageId: number, index: number) => (
          <Card
            key={index}
            gridSize={gridSize}
            imageId={imageId}
          />
        ))
      }
    </Board>
  )
};

export default Game;
