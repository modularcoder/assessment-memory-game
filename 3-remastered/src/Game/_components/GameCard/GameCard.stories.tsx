import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import GameCard from './GameCard'

const meta: Meta<typeof GameCard> = {
  title: 'Game/GameCard',
  component: GameCard,
}
export default meta

type Story = StoryObj<typeof GameCard>

export const Default: Story = {
  render: () => <GameCard />,
}
