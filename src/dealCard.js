/**
 * A module for dealing cards from a deck.
 *
 * @module src/dealCard
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { EmptyDeckError } from './EmptyDeckError.js'

/**
 * Deal a new card from the deck to the player.
 *
 * @param {to[]} to - The player-array that the new card is added to.
 * @param {from[]} from - The deck-array that the card is taken from.
 * @returns {Array} - Returns the two arrays through an array.
 */
export function dealCard (to, from) {
  let deal = []

  if (from.length < 1) {
    throw new EmptyDeckError('Cannot draw card from empty deck.')
  } else if (from.length === 1) {

  }

  deal = to.push(from.pop())
  return [deal]
}
