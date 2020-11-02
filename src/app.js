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
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { playersToTable } from './playersToTable.js'
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
    let playerWin = false
    let playerBust = false
    let playerSatisfied = false
    let dealerWin = false
    let dealerBust = false
    let dealerSatisfied = false
    //
    while (players[i].hand.length < 5 && players[i].value() < 21) {
      Deck.dealCard(players[i].hand, library, discardPile)
      if (players[i].value() === 21) {
        playerWin = true
        console.log('You won at 21!')
        break
      } else if (players[i].hand.length === 5 && players[i].value() < 21) {
        playerWin = true
        console.log('Winner at 5 cards under 21 points!')
        break
      } else if (players[i].value() > 21) {
        playerBust = true
        console.log('Sorry, you busted!')
        break
      } else if (players[i].value() > 10) {
        playerSatisfied = true
        console.log('Player Satisfied')
        break
      } else {
        continue
      }
    }
    //
    if (playerWin === true) {
      console.log(players[i].showHand())
      console.log(dealer.showHand())
      console.log('Player wins!', '\n')
    }
    if (playerBust === true) {
      console.log(players[i].showHand())
      console.log(dealer.showHand())
      console.log('Player busts!', '\n')
    }
    if (playerSatisfied === true) {
      //
      while (dealer.hand.length < 5 && dealer.value() < 21) {
        Deck.dealCard(dealer.hand, library, discardPile)
        if (dealer.value() === 21) {
          dealerWin = true
          console.log('Dealer won at 21!')
          break
        } else if (dealer.hand.length === 5 && dealer.value() < 21) {
          dealerWin = true
          console.log('Dealer won at 5 cards under 21 points!')
          break
        } else if (dealer.value() > 21) {
          dealerBust = true
          console.log('Dealer busted!')
          break
        } else if (dealer.value() > 14) {
          dealerSatisfied = true
          console.log('Dealer satisfied')
          break
        } else {
          continue
        }
      }
      //
      if (dealerWin === true) {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Dealer wins!', '\n')
      }
      if (dealerBust === true) {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Player wins!', '\n')
      }
      if (dealerSatisfied && dealer.value() >= players[i].value()) {
        console.log(players[i].showHand())
        console.log(dealer.showHand())
        console.log('Dealer wins!', '\n')
      }
      // Dealer discards its hand after playing against a player.
      if (dealer.hand.length > 0) {
        dealer.discard(discardPile)
      }
    }
    // Player discards its hand at end of its turn.
    players[i].discard(discardPile)
    //
  }

  console.log('Library state:', library.join(', '), '\n')
  console.log('Discard Pile:', discardPile.join(', '), '\n')
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
