import styled from 'styled-components';

interface Props {
  imageUrl: string;
}

export default styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
