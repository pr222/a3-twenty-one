/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// TODO: Replace the code below with your own game logic.

import { Deck } from './Deck.js'

let players = process.argv.slice(2)
players = Number(players)
// Begins game with 3 players if no starting arguments are present.
if (players === 0) {
  players = 3
}
// Checks if input arguments are valid numbers for the game to start.
if (Number.isInteger(players) && (players <= 7 || players === 20 || players === 50)) {
  console.log('Welcome to the table, have a seat!')
} else {
  console.log('Sorry, this table is not fit for you!')
}

console.log('Args to use: ', players)
console.log('All args ', process.argv)
/*
try {
  // Create 52 playing cards and...
  const playingCards = Deck.create()
  console.log(playingCards.join(', '), '\n')

  // ...shuffle them.
  Deck.shuffle(playingCards)
  console.log(playingCards.join(', '), '\n')

  // Draw three playing cards, view the remaining playing cards, the drawn playing cards and
  // then calculate the value of them.
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
  const hand = playingCards.splice(0, 3)

  console.log(playingCards.join(', '))

  const value = hand.reduce((value, playingCard) => value + playingCard, 0)
  console.log(`${hand.join(' ')} (${value})`)
} catch (e) {
  console.error(e.message)
}
*/