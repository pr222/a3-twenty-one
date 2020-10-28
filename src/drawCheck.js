
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
 * @throws {Error} - If deck is empty and cannot draw card.
 * @throws {Error} - If there are no discarded cards to shuffle.
 * @returns {from[]} - Returns the deck.
 */
export function drawCheck (from, discarded) {
  // Throw error if trying to deal card from an empty deck.
  if (from.length < 1) {
    throw new EmptyDeckError('Cannot draw card from empty deck.')
  // If deck only has 1 card left:
  } else if (from.length === 1) {
    if (discarded.length < 1) {
      throw new Error('Cannot shuffle cards from an empty discard pile!')
    } else {
      // - Shuffle discard pile and put it to the deck.
      console.log('Only one card left!')
      Deck.shuffle(discarded)

      // Move the discarded cards to the deck.
      from.unshift(...discarded)
      // discarded = []
      discarded.splice(0)
      console.log('Or is it?')

      return from
    }
  }
}
