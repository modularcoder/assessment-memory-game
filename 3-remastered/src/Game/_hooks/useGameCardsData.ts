import { useState, useEffect } from 'react'
import cardsService from '../../_services/cardsService'

function useGameCardsData(gridSize: number) {
  const [cardsData, setCardsData] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const cardsRequestData = await cardsService.get(gridSize)

      setCardsData(cardsRequestData)
    } catch (err) {
      setError(err)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [gridSize])

  return {
    cardsData,
    isLoading,
    error,
    fetchData,
  }
}

export { useGameCardsData }
