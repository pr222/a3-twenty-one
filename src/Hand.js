/**
 * Module for Hand class.
 *
 * @module src/Hand
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { EmptyDeckError } from './EmptyDeckError.js'

/**
 * Representation of a Hand.
 *
 * @class
 */
export class Hand {
  constructor (hand) {
    this.hand = hand
  }

  /**
   * Deal a new card from the deck to the hand.
   *
   * @param {from[]} from - The deck-array that the card is taken from.
   * @returns {Array} - Returns the two arrays through an array.
   */
  dealCard (from) {
    let deal = []
    // Throw error if trying to deal card from an empty deck.
    if (from.length < 1) {
      throw new EmptyDeckError('Cannot draw card from empty deck.')
    // If deck only has 1 card left:
    // - Shuffle discard pile and put it to the deck.
    // - Then deal card.
    } else if (from.length === 1) {
      // CODE --> Shuffle discard pile and put to drawpile.

    } else {
      // Move card from deck to hand.
      deal = this.hand.push(from.pop())
      return [deal]
    }
  }
}
