import React, { useState } from 'react';
import CardWrapper from './CardWrapper';
import CardImage from './CardImage';
import CardBack from './CardBack';

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
    <CardWrapper {...props} isFlipped={props.isFlipped} onClick={handleCardClick}>
      <CardBack />
      <CardImage src={`https://picsum.photos/id/${props.imageId}/600`} alt={`${props.imageId}`} />
    </CardWrapper>
  );
}
