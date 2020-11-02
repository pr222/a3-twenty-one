/**
 * Module for Player class.
 *
 * @module src/Player
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */
// import { EmptyDeckError } from './EmptyDeckError.js'
// import { PlayingCard } from './PlayingCard.js'

/**
 * Representation of a player.
 *
 * @class
 */
export class Player {
  constructor (name) {
    this.name = name
    this.hand = []
  }

  /**
   * Discard cards from hand.
   *
   * @param {to[]} to - Where to discard cards.
   * @returns {Array} - Returns discarded cards.
   * @memberof Player
   */
  discard (to) {
    // Discard cards from hand.
    const discarded = to.push(...this.hand)
    // Empty the hand.
    this.hand = []

    return discarded
  }

  /**
   * Sum up the value of all cards in a hand.
   *
   * @memberof Player
   * @returns {number} - Returns the number value of all cards in hand.
   */
  value () {
    // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
    //  the primitive value of the current PlayingCard object.)
    const value = this.hand.reduce((value, playingCard) => value + playingCard, 0)

    return value
  }

  /**
   * Displays what cards the player has in its hand.
   *
   * @memberof Player
   * @returns {string} - A presentation of cards in hand and their summed up value.
   */
  showHand () {
    return `Player #${this.name}: ${this.hand.join(' ')} (${this.value()})`
  }
}
