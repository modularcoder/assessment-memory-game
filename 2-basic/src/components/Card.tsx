import React from 'react'

import CardWrapper from './CardWrapper';
import CardInner from './CardInner';
import CardFront from './CardFront';
import CardImage from './CardImage';


interface Props {
  gridSize: number;
  index: number;
  imageId: number;
  isSolved: boolean;
  isFlipped: boolean;
  onClick?: (index: number) => void;
}

export default function Card(props: Props) {
  const handleCardClick = () => {
    props.onClick && props.onClick(props.index)
  }

  return (
    <CardWrapper {...props} onClick={handleCardClick}>
      <CardInner isFlipped={props.isFlipped}>
        <CardFront />
        <CardImage imageUrl={`https://picsum.photos/id/${props.imageId}/600`}  />
      </CardInner>
    </CardWrapper>
  );
}

