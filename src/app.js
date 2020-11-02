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
// import { PlayingCard } from './PlayingCard.js'
// import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { playersToTable } from './playersToTable.js'
// import { mainStep } from './mainStep.js'
// import { playTheGame } from './playTheGame.js'

try {
  // Get array of players to the table.
  // It also checks that input arguments for players are valid.
  const players = playersToTable()

  // Create library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)
  console.log('Starting library:', library.join(', '), '\n')

  // Create an empty discard pile.
  const discardPile = []

  // Bring the dealer to the table.
  const dealer = new Dealer('Dealer')

  // Deal the first card to all players from the library.
  for (let i = 0; i < players.length; i++) {
    Deck.dealCard(players[i].hand, library, discardPile)
  }

  for (let i = 0; i < players.length; i++) {
    // Now the player gets to draw some cards and play!
    players[i].mainStep(library, discardPile)

    if (players[i].win === 'Win!') {
      console.log(players[i].showHand())
      console.log(dealer.showHand())
      console.log('Player wins!', '\n')
    } else if (players[i].bust === 'Bust!') {
      console.log(players[i].showHand())
      console.log(dealer.showHand())
      console.log('Dealer wins!', '\n')
    } else {
      // Let the dealer play if player is satisfied.
      dealer.mainStep(library, discardPile)

      if (dealer.win === 'Win!') {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Dealer wins!', '\n')
      } else if (dealer.bust === 'Bust!') {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Player wins!', '\n')
      } else if (dealer.value() >= players[i].value()) {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Dealer wins!', '\n')
      } else {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Player wins!', '\n')
      }
    }

    // Dealer discards its hand after playing against a player.
    // Also resets status of win and bust properties.
    dealer.endStep(discardPile)

    // Player discards its hand at end of its turn.
    players[i].endStep(discardPile)
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
