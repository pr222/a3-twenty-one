/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { InputError } from './InputError.js'
import { EmptyDeckError } from './EmptyDeckError.js'
import { Dealer } from './Dealer.js'
import { playersToTable } from './playersToTable.js'
import { mainStep } from './mainStep.js'
import { displayResluts } from './displayResults.js'

try {
  // Get array of players to the table.
  // It also checks that input arguments for players are valid.
  const players = playersToTable()

  // Create a library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)
  // console.log('Starting library:', library.join(', '), '\n')

  // Create an empty discard pile.
  const discardPile = []

  // Bring the dealer to the table.
  const dealer = new Dealer('Dealer')

  // Deal the first card to all players from the library.
  for (let i = 0; i < players.length; i++) {
    Deck.dealCard(players[i].hand, library, discardPile)
  }

  // Loop through all players and let them play.
  for (let i = 0; i < players.length; i++) {
    // Now the player gets to draw some cards and play!
    mainStep(players[i], library, discardPile)

    if (!players[i].satisfied) {
      console.log(displayResluts(players[i], dealer))
    } else {
      // Let the dealer also play if player didn't win or bust.
      mainStep(dealer, library, discardPile)

      if (!dealer.satisfied) {
        console.log(displayResluts(players[i], dealer))
      } else {
        // Compare hands if both are satisfied.
        console.log(displayResluts(players[i], dealer))
      }
    }

    // Dealer discards its hand after playing against a player.
    // Also resets its status properties.
    dealer.endStep(discardPile)

    // Player discards its hand at end of its turn.
    players[i].discard(discardPile)
  }

  // console.log('Library state:', library.join(', '), '\n')
  // console.log('Discard Pile:', discardPile.join(', '), '\n')
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
