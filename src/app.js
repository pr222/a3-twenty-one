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
// import { PlayingCard } from './PlayingCard.js'
import { Player } from './Player.js'
import { playersToTable } from './playersToTable.js'

try {
  // Get array of players to the table.
  const players = playersToTable()
  console.log(players)

  // Create library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)

  // Create an starting empty discard pile.
  const discardPile = []

  console.log('Library:', library.join(', '), '\n')
  // Deal the first card to player from the draw pile.
  players[0].dealCard(library)
  console.log(players[0])

  console.log('Library:', library.join(', '), '\n')
  console.log('Discard Pile:', discardPile.join(''), '\n')
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
