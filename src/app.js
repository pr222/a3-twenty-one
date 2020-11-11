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
import { resluts } from './results.js'

try {
  // Get array of players to the table.
  // It also checks that the commando arguments for players are valid.
  const players = playersToTable()

  // Create a library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)

  // Place an empty discard pile.
  const discardPile = []

  // Bring the dealer to the table.
  const dealer = new Dealer('Dealer')

  // Deal the first card to all players from the library.
  for (let i = 0; i < players.length; i++) {
    Deck.dealCard(players[i].hand, library, discardPile)
  }

  // Loop through all players and let them play one at a time.
  for (let i = 0; i < players.length; i++) {
    // The player gets to play!
    mainStep(players[i], library, discardPile)

    // Display results immediatelly if player won or busted before satisfied.
    if (!players[i].satisfied) {
      console.log(resluts(players[i], dealer))
    } else {
      // Let the dealer also play if player didn't win or bust.
      mainStep(dealer, library, discardPile)
      // Display results immediatelly if dealer won or busted before satisfied.
      if (!dealer.satisfied) {
        console.log(resluts(players[i], dealer))
      } else {
        // Compare hands if both are satisfied and display the outcome.
        console.log(resluts(players[i], dealer))
      }
    }

    // Dealer discards its hand after playing against a player.
    // Dealer also resets its necessary property values for the next game.
    dealer.endStep(discardPile)

    // Player discards its hand at end of its turn.
    players[i].discard(discardPile)
  }
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
