import React from 'react'
import styled from 'styled-components'
import GameContainer from './Game/GameContainer'

function App() {
  return (
    <AppLayout>
      <GameContainer />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  padding: 20px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
