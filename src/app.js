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
import { playersToTable } from './playersToTable.js'

try {
  // Get array of players to the table.
  // It also checks that input arguments for players are valid.
  const players = playersToTable()
  console.log(players)

  // Create library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)

  // Create an starting empty discard pile.
  const discardPile = []

  // Bring the dealer to the table.
  // const dealer = New Dealer

  console.log('Starting library:', library.join(', '), '\n')

  // Deal the first card to all players from the library.
  for (let i = 0; i < players.length; i++) {
    Deck.dealCard(players[i].hand, library)
    console.log(players[i])
  }



  Deck.dealCard(players[0].hand, library, discardPile)
  console.log('First player with some cards: ' + players[0].hand.join(', '))
  console.log('Library state:', library.join(', '), '\n')

  players[0].discard(discardPile)
  players[2].discard(discardPile)
  players[1].discard(discardPile)
  console.log('Discard Pile:', discardPile.join(', '), '\n')

  Deck.dealCard(players[0].hand, library, discardPile)
  console.log('First player with some cards: ' + players[0].hand.join(', '))
  console.log('Library state:', library.join(', '), '\n')
  console.log('Discard Pile:', discardPile.join(', '), '\n')

  Deck.dealCard(players[0].hand, library, discardPile)
  Deck.dealCard(players[0].hand, library, discardPile)
  console.log('First player with 2 more cards: ' + players[0].hand.join(', '))

  players[0].discard(discardPile)
  console.log('First player with discarded cards: ' + players[0].hand.join(', '))
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
