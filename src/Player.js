/**
 * Module for Player class.
 *
 * @module src/Player
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */
import { EmptyDeckError } from './EmptyDeckError.js'
// import { PlayingCard } from './PlayingCard.js'

/**
 * Representation of a Hand.
 *
 * @class
 */
export class Player {
  constructor (name) {
    this.name = name
    this.hand = []
  }

  /**
   * Dealt a new card from the deck to the hand.
   *
   * @param {from[]} from - The deck-array that the card is taken from.
   * @returns {Array} - Returns the two arrays through an array.
   */
  dealCard (from) {
    let dealt = []
    // Throw error if trying to deal card from an empty deck.
    if (from.length < 1) {
      throw new EmptyDeckError('Cannot draw card from empty deck.')
    // If deck only has 1 card left:
    // - Shuffle discard pile and put it to the deck.
    } else if (from.length === 1) {
      // CODE --> Shuffle discard pile and put to drawpile.

    } else {
      // Move card from deck to hand.
      dealt = this.hand.push(from.pop())
      return [dealt]
    }
  }

  /**
   * Discard cards from hand.
   *
   * @param {to[]} to - Discard cards to this array.
   * @returns {Array} - Returns discarded cards in the array.
   * @memberof Player
   */
  discard (to) {
    const discarded = to.push(this.hand)
    return discarded
  }

  showHand () {
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
    const value = this.hand.reduce((value, playingCard) => value + playingCard, 0)
    console.log(`Hand of cards: ${this.hand.join(' ')} (${value})`)
  }
}
