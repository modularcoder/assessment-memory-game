import styled from 'styled-components';

interface Props {
  gridSize: number;
  isSolved: boolean;
  isFlipped: boolean;
}

export default styled.div<Props>`
  border-width: 2px;
  border-radius: 5px;
  overflow: hidden;
  border-style: solid;
  border-color: ${(props) => props.isSolved ? 'green' : 'gray'};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  width: ${(props) => `${100 / props.gridSize}%`};
  height: ${(props) => `${100 / props.gridSize}%`};
  box-sizing: border-box;
  transform: ${(props) => props.isFlipped ? 'translateX(-100%) rotateY(-180deg)' : 'none'};
`;
