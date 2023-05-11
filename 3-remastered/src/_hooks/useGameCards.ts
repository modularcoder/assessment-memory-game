import { useState, useEffect } from 'react';
// import { Card } from '../types'


export type Card = {
  index: number
  imageId: number
  isSolved: boolean
  isActive: boolean
}


function useGameCards(cardsData: number[]) {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    // Cards data
    setCards(cardsData.map((imageId, index) => {
      return {
        index,
        imageId,
        isSolved: false,
        isActive: false
      }
    }))

  }, [cardsData])

  const cardsActive = cards.filter((card) => card.isActive)
  const cardsSolved = cards.filter((card) => card.isSolved)

  const toggleCard = (card: Card) => {
    // This card is solved, do nothing
    if (card.isSolved) {
      return false;
    }


    // Intention to activate the card
    // if there are more than two active cards, deactivate them

    const solvedCardImageId = card.isActive === false && cardsActive.length === 1 && cardsActive[0].imageId === card.imageId
      ? card.imageId : undefined


    // There are solved cards, mark them as solved, deactivate everything
    if (solvedCardImageId) {
      setCards(
        cards.map(cardItem => {
          if (cardItem.imageId === solvedCardImageId) {
            return {
              ...cardItem,
              isActive: false,
              isSolved: true
            }
          }

          return {
            ...cardItem,
            isActive: false
          }
        })
      )
    }
    // There are no solved cards, activate current card, deactivate others if needed
    else {
      const deactivateOthers = cardsActive.length >= 2 && card.isActive === false

      setCards(cards.map(cardItem => {
        if (card.index === cardItem.index) {
          return {
            ...cardItem,
            isActive: !cardItem.isActive
          }
        }

        // Other cards
        return {
          ...cardItem,
          isActive: deactivateOthers ? false : cardItem.isActive
        }
      }))
    }


  }

  return {
    cards,
    toggleCard,
  }
}


export { useGameCards }
