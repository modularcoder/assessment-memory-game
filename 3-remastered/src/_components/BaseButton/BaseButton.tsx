import styled from 'styled-components'

type Props = {
  disabled?: boolean
}

export default styled.button<Props>`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: all 0.2s ease;

  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.7;
  `}

  &:hover {
    background-color: #f082ac;
  }
`
