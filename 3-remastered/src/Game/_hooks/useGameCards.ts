import { useState, useEffect } from 'react'
import { GameCardItem } from '../../_types'

function useGameCards(cardsData: number[]) {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [cards, setCards] = useState<GameCardItem[]>([])

  const cardsActive = cards.filter((card) => card.isActive)
  const cardsSolved = cards.filter((card) => card.isSolved)

  useEffect(() => {
    setIsGameStarted(false)

    const cardItems = cardsData.map((imageId, index) => {
      return {
        index,
        imageId,
        imageUrl: `https://picsum.photos/id/${imageId}/600`,
        isSolved: false,
        isActive: true,
      }
    })

    // Show cards for 5 seconds
    setCards(cardItems)

    let timeout = setTimeout(() => {
      setIsGameStarted(true)

      setCards(
        cardItems.map((cardItem) => {
          return {
            ...cardItem,
            isActive: false,
          }
        })
      )
    }, 5000)

    return () => clearTimeout(timeout)
  }, [cardsData])

  const toggleCard = (card: GameCardItem) => {
    // This card is solved, do nothing
    if (card.isSolved) {
      return false
    }

    // Intention to activate the card
    // if there are more than two active cards, deactivate them
    const solvedCardImageId =
      card.isActive === false &&
      cardsActive.length === 1 &&
      cardsActive[0].imageId === card.imageId
        ? card.imageId
        : undefined

    // There are solved cards, mark them as solved, deactivate everything
    if (solvedCardImageId) {
      setCards(
        cards.map((cardItem) => {
          if (cardItem.imageId === solvedCardImageId) {
            return {
              ...cardItem,
              isActive: false,
              isSolved: true,
            }
          }

          return {
            ...cardItem,
            isActive: false,
          }
        })
      )
    }
    // There are no solved cards, activate current card, deactivate others if needed
    else {
      const deactivateOthers =
        cardsActive.length >= 2 && card.isActive === false

      setCards(
        cards.map((cardItem) => {
          if (card.index === cardItem.index) {
            return {
              ...cardItem,
              isActive: !cardItem.isActive,
            }
          }

          // Other cards
          return {
            ...cardItem,
            isActive: deactivateOthers ? false : cardItem.isActive,
          }
        })
      )
    }
  }

  return {
    cards,
    cardsSolved,
    toggleCard,
    isGameStarted,
  }
}

export { useGameCards }
