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
import { PlayingCard } from './PlayingCard.js'
import { Hand } from './Hand.js'

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

  // Create an starting empty discard pile.
  const discardPile = []

  // Players' hand
  const hand1 = new Hand([])
  console.log('Library:', library.join(', '), '\n') // TEST
  // Deal the first card to player from the draw pile.
  // dealCard(hand1, library)
  hand1.dealCard(library)
  hand1.dealCard(discardPile)

  // 2nd card
  // dealCard(hand1, library)

  // discard(hand1, discardPile)

  console.log('Library:', library.join(', '), '\n') // TEST
  // Calculate the value of cards in the hand.
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
  // const value = hand1.reduce((value, playingCard) => value + playingCard, 0)
  // console.log(`Player's hand is: ${hand1.join(' ')} (${value})`)
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
