import styled from 'styled-components';

interface Props {
  isFlipped: boolean;
}


export default styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform .8s;
  transform: ${(props) => props.isFlipped ? 'rotateY(180deg);' : 'none'}
`
