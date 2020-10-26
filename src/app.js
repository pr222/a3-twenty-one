/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { inputValidation } from './inputValidation.js'
import { InputError } from './InputError.js'
import { EmptyDeckError } from './EmptyDeckError.js'
import { dealCard } from './dealCard.js'

try {
  // Begin checking if input is a valid number of players.
  const nrOfPlayers = inputValidation()
  console.log('Players: ', nrOfPlayers) // TEST

  // Make array of players
  // const players = new Array(nrOfPlayers)

  // for (let i = 0; i < players.length; i++) {
  //   players.push(i)
  // }

  // console.log(players) // TEST

  // Create starting library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)

  // Copy the library to the drawpile.
  const drawPile = library.slice()

  // Create an starting empty discard pile.
  const discardPile = []

  // Players' hand
  const player = []

  // Deal the first card to player from the draw pile.
  dealCard(player, drawPile)

  dealCard(player, whateverPile)

  // Draw three playing cards, view the remaining playing cards, the drawn playing cards and
  // then calculate the value of them.
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
  const hand = drawPile.splice(0, 3)

  console.log('Deck after 3-card splice:', drawPile.join(', '), '\n') // TEST

  const value = hand.reduce((value, playingCard) => value + playingCard, 0)
  console.log(`Player's hand is: ${hand.join(' ')} (${value})`)
} catch (err) {
  console.error(err.message)
  process.exitCode = 1

  if (err instanceof InputError) {
    process.exitCode = 26
  }

  if (err instanceof EmptyDeckError) {
    process.exitCode = 27
  }
}
