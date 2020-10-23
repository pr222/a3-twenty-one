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
import { EmptyDeck } from './EmptyDeck.js'

try {
  // Begin checking if input is a valid number of players.
  const nrOfPlayers = inputValidation()
  console.log('Players: ', nrOfPlayers) // TEST

  // Make array of players
  const players = []

  for (let i = 0; i < nrOfPlayers; i++) {
    players.push(i)
  }

  console.log(players) // TEST

  // Create starting library with 52 playing cards.
  const library = Deck.create()
  console.log('Library: ', library.join(', '), '\n')

  // Shuffle the library.
  Deck.shuffle(library)
  console.log('Shuffled library: ', library.join(', '), '\n') // TEST

  // Put the library to the drawpile.
  const drawPile = library.splice(0, 52)

  console.log('Library: ', library.join(', '), '\n') // TEST
  console.log('Drawpile: ', drawPile.join(', '), '\n') // TEST

  // Create an starting empty discard pile.
  const discardPile = []

  // Draw three playing cards, view the remaining playing cards, the drawn playing cards and
  // then calculate the value of them.
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
  const hand = drawPile.splice(0, 3)

  console.log('Deck with removed cards:', drawPile.join(', '), '\n') // TEST

  const value = hand.reduce((value, playingCard) => value + playingCard, 0)
  console.log(`Player's hand is: ${hand.join(' ')} (${value})`)
} catch (err) {
  console.error(err.message)
  process.exitCode = 1

  if (err instanceof InputError) {
    process.exitCode = 26
  }

  if (err instanceof EmptyDeck) {
    process.exitCode = 27
  }
}
