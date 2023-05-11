import { useState, useEffect } from 'react';
import { fetch } from '../service'



function useGameCardsData(gridSize: number) {
  const [cardsData, setCardsData] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch('/api/v2/imageIds', gridSize);

        if (response.status !== 200) {
          throw new Error('Could not load the cards data :(');
        }

        const responseData: number[] = JSON.parse(await new Response(response.body).text());


        setCardsData(responseData)
      }
      catch (err) {
        setError(err)
      }

      setIsLoading(false)
    }


    fetchData()
  }, [gridSize])

  return {
    cardsData,
    isLoading,
    error,
  }
}


export { useGameCardsData }
