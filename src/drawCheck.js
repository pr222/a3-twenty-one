/**
 * Module to check if possible to draw card from deck.
 *
 * @module src/inputValidation
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { EmptyDeckError } from './EmptyDeckError.js'
import { Deck } from './Deck.js'

/**
 * Checks the deck if possible to draw card.
 *
 * @param {from[]} from - The deck to draw from.
 * @param {discarded[]} discarded - Array of discarded cards.
 * @throws {Error} - Throws custom error if not possible to draw a card.
 * @returns {from[]} - Returns the deck to draw cards from.
 */
export function drawCheck (from, discarded) {
  // Throw error if trying to deal card from an empty deck.
  if (from.length < 1) {
    throw new EmptyDeckError('Cannot draw card from empty deck.')
  // If deck only has 1 card left:
  } else if (from.length === 1) {
    // Shuffle discard pile.
    Deck.shuffle(discarded)

    // And move the discarded cards to the deck under the card.
    from.unshift(...discarded)

    // Empty the discardpile.
    discarded.splice(0)

    return from
  }
}
