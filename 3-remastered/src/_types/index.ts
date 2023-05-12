export type GameCardItem = {
  index: number
  imageId: number
  imageUrl: string
  isSolved: boolean
  isActive: boolean
}

export type GameStatus = 'starting' | 'started' | 'ended'
