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
  while (player.hand.length < 5 && player.points < 21) {
    // Deal a card.
    Deck.dealCard(player.hand, deck, discard)

    let modifier = 0
    player.points = player.value()
    // let aceVal = 0

    // console.log(player.hand.rank)
    for (let i = 0; i < player.hand.length; i++) {
      if (player.hand[i].rank === 1 && (player.points + 13) < 21) {
        modifier += 13
      }
      console.log(player.hand[i].rank)
    }

    console.log(`Sum ${modifier}`)
    player.points = player.points + modifier
    console.log(`Player points ${player.points}`)

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
      // Dealer stops taking cards when hand is more than 15.
    } else if (player instanceof Dealer && player.points > 15) {
      player.satisfied = true
      break
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
