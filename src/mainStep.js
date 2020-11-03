/**
 * Module for drawing cards in the main step of the game.
 *
 * @module src/mainStep.js
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { Deck } from './Deck.js'
import { Dealer } from './Dealer.js'
import { aceModCheck } from './aceModCheck.js'

/**
 * The main steps of drawing cards.
 *
 * @param {object} player - The player or dealer who gets cards.
 * @param {Deck[]} deck - The deck cards are taken from.
 * @param {discard[]} discard - The place to discard cards.
 * @returns {object} - Returns the one with the cards.
 */
export function mainStep (player, deck, discard) {
  while (player.hand.length < 5 && player.points < 21) {
    // Deal a card.
    Deck.dealCard(player.hand, deck, discard)
    // Check and update points for player if Ace is better counted as 14.
    aceModCheck(player)

    if (player.points === 21) {
      player.win = true
      break
    } else if (player.hand.length === 5 && player.points < 21) {
      player.win = true
      break
    } else if (player.points > 21) {
      player.bust = true
      player.result = 'Busted!'
      break
      // Dealer stops taking cards when hand is more than 12.
    } else if (player instanceof Dealer) {
      if (player.points > 12) {
        player.satisfied = true
        break
      } else {
        continue
      }
      // Player stops taking cards when hand is more than 10.
    } else if (player.points > 10) {
      player.satisfied = true
      break
    } else {
      continue
    }
  }

  return player
}
