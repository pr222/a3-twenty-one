/**
 * Module for drawing cards in the main step of the game.
 *
 * @module src/mainStep.js
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { Deck } from './Deck.js'
import { Dealer } from './Dealer.js'

/**
 * The main steps of drawing cards.
 *
 * @param {object} player - The player or dealer who gets cards.
 * @param {Deck[]} deck - The deck cards are taken from.
 * @param {discard[]} discard - The place to discard cards.
 * @returns {object} - Returns the one with the cards.
 */
export function mainStep (player, deck, discard) {
  while (player.hand.length < 5 && player.value() < 21) {
    // Deal a card.
    Deck.dealCard(player.hand, deck, discard)

    if (player.value() === 21) {
      player.win = true
      break
    } else if (player.hand.length === 5 && player.value() < 21) {
      player.win = true
      break
    } else if (player.value() > 21) {
      player.bust = true
      player.result = 'Busted!'
      break
      // Dealer stops taking cards when hand is more than 15.
    } else if (player instanceof Dealer) {
      if (player.value() > 15) {
        player.satisfied = true
        break
      } else {
        continue
      }
      // Player stops taking cards when hand is more than 10.
    } else if (player.value() > 10) {
      player.satisfied = true
      break
    } else {
      continue
    }
  }

  return player
}
