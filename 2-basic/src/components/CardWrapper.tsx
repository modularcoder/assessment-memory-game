import styled from 'styled-components';

interface Props {
  gridSize: number;
  isSolved: boolean;
}

export default styled.div<Props>`
  border-width: 2px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${(props) => props.isSolved ? 'green' : 'gray'};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  width: ${(props) => `${100 / props.gridSize}%`};
  height: ${(props) => `${100 / props.gridSize}%`};
  box-sizing: border-box;
  perspective: 500px;
`;
