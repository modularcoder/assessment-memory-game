# SPREAD Memory Game Soluton

In this assignment we're supposed to finish the non-working prototype of the memory game implemented by other developer.

## Analyzing the problem


The compilation of the app fails in `Game.tsx` component

```
useEffect(() => {
  const response = fetch('/api/v2/imageIds', 5);
  setCards( (response.body as any))
}, [])
```

There is a fetch mock function implementation in `service.ts` file, but the Response contains Blob, which isn't correctly read.

Also fetch mock function is implemented in a way that it might randomly fail returning 500 server error status. This isn't also handled in the initial implementation.



The card component is not finished. It displays the image even if the card isn't flipped. When card isn't flipped the gamer shouldn't see the image of the game.

The game logic isn't implemented. The `Card` component has `isFlipped` inner state, which changes on click, but actual memory game is more complicated and isn't implemented in the project.

The usual rules of the momory game are the following:

- we have X amount of cards which are not visible
- we may open two cards at the same time
- if we open the cards with same images they stay open
- the game ends when all cards are open


CardWrapper size depends on the grid size, ideally the CardWrapper doesn't need to know about the container

The Game component depends on the implementation of network layer. Ideally this should be abstracted away from the component as a hook, which Guaranteed resolves as a data or contains error

## Implementation Basic

To implement the basic working prototype we have approx 4 hours, so we will not focus much on the styles, design patterns, tests and will just have to:

- Implement a basic working prototype
- Implement the game business logic
- Do some minor fixes and improvements
- Ensure the solution should be typesafe


In this step I've implemented the following

- Fixed app compilation issue
- Moved the data loading part into the separate `useGameCardsData` hook
- Added possible network error handling
- Moved the `isFlipped` state to a property for the `Game.tsx` component to provide the business logic of the game
- Implemented `useGameCards` hook which contains the business logic
  - At after load all the cards are visible during 5 seconds
  - The game starts in 5 seconds
  - If the game isn't started the cards are not clickable
  - If two of the same image cards are flipped, they stay flipped
  - If there are two different images card open, during the next time click the previously opened cards are closed
- Fixed `Card.tsx` component so that the image is not visible unless the card is flipped
- Improved mock data so we have better cards grid matrix
- Some minor style adjustments: the solved cards have a green border, that gamer knows that those cards were


## Implementation Remastered


- Better UI
- Better directory structure (I'm using Modular Code organization conventions https://github.com/modularcode/modular-styleguide )
- Better components organization (smart component, visual components). Game logic is encapsulated in the `useGame` hook, which is used in the `GameContainer.tsx` smart component. The `Game.tsx` component is purely visual component, and we may describe it in storybook.
- Component driven development via storybook
- Added game controls
- Components are displayed in the grid
- Cards don't have fixed width height and are adjustable to parent grid
- Better animations
- Counting number of moves
- Feature to reload the game if there was an error
- Game statuses: 'starting' | 'started' | 'ended'
- Confetti animation when the game is finished, so user may restart the game


Further needed improvements:

- Add interaction tests to storybook
- Possible E2E tests with Cypress
- The game logic useGame should be covered by tests
- Might be goot to introduce state management library like Redux + Redux-Toolkit, Zoostand or React Contexts, but aim to keep the visual/smart component pattern
- Optimize cards list rerendering (memo + useCallback)
