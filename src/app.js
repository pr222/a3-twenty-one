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
  console.log('Library: ', library.join(', '), '\n')

  // Shuffle the library.
  Deck.shuffle(library)
  console.log('Shuffled library: ', library.join(', '), '\n') // TEST

  // Put the library to the drawpile.
  const drawPile = library.slice()

  console.log('Sliced library: ', library.join(', '), '\n') // TEST
  console.log('Drawpile: ', drawPile.join(', '), '\n') // TEST

  // Create an starting empty discard pile.
  const discardPile = []

  // Players' hand
  const player = []

  dealCard(player, drawPile)

  console.log(player.join('')) // TEST¨
  console.log(player)
  console.log('Drawpile after deal?: ', drawPile.join(', '), '\n') // TEST
  
  
  dealCard(player, drawPile)

  console.log(player.join('')) // TEST¨
  console.log(player)
  console.log('Drawpile after deal?: ', drawPile.join(', '), '\n') // TEST



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

  if (err instanceof EmptyDeck) {
    process.exitCode = 27
  }
}
