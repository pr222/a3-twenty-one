/**
 * A module for dealing cards from a deck.
 *
 * @module src/dealCard
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Deal a new card from the deck to the player.
 *
 * @param {to[]} to - The player-array that the new card is added to.
 * @param {from[]} from - The deck-array that the card is taken from.
 * @returns {Array} - Returns the two arrays through an array.
 */
export function dealCard (to, from) {
  let deal = []
  deal = to.push(from.pop())
  return [deal]
}
