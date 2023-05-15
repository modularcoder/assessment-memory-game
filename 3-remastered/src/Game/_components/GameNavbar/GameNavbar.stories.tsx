import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { generateCards } from '../../../_services/cardsService'

import GameNavbar from './GameNavbar'

const meta: Meta<typeof GameNavbar> = {
  title: 'Game/GameNavbar',
  component: GameNavbar,
}
export default meta

type Story = StoryObj<typeof GameNavbar>

export const GameLoading: Story = {
  render: () => (
    <GameNavbar
      gameStatus={'starting'}
      isLoading={true}
      movesCount={0}
      onReloadClick={() => {}}
    />
  ),
}

export const GameStarting: Story = {
  render: () => (
    <GameNavbar
      gameStatus={'starting'}
      isLoading={false}
      movesCount={0}
      onReloadClick={() => {}}
    />
  ),
}

export const GameStarted: Story = {
  render: () => (
    <GameNavbar
      gameStatus={'started'}
      isLoading={false}
      movesCount={14}
      onReloadClick={() => {}}
    />
  ),
}

export const GameEnded: Story = {
  render: () => (
    <GameNavbar
      gameStatus={'ended'}
      isLoading={false}
      movesCount={14}
      onReloadClick={() => {}}
    />
  ),
}
