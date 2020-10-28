
/**
 * Module to check if possible to draw card from deck.
 *
 * @module src/inputValidation
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { EmptyDeckError } from './EmptyDeckError.js'

/**
 * Checks the deck if possible to draw card.
 *
 * @param {from[]} from - The deck to draw from.
 * @throws {Error} - If deck is empty and cannot draw card.
 * @returns {from[]} - Returns the deck.
 */
export function drawCheck (from) {
  // Throw error if trying to deal card from an empty deck.
  if (from.length < 1) {
    throw new EmptyDeckError('Cannot draw card from empty deck.')
    // If deck only has 1 card left:
    // - Shuffle discard pile and put it to the deck.
  } else if (from.length === 1) {
    console.log('Only one card left!')
  }
  return from
}
