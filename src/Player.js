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
   * @param {to[]} to - Discard cards to this array.
   * @returns {Array} - Returns discarded cards in the array.
   * @memberof Player
   */
  discard (to) {
    const discarded = to.push(...this.hand)
    this.hand = []
    return discarded
  }

  /**
   * Sum up the value of all cards in a hand.
   *
   * @returns {number} - Returns the number value of all cards in hand.
   * @memberof Player
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
   */
  showHand () {
    const value = this.value()

    console.log(`Player #${this.name}: ${this.hand.join(' ')} (${value})`)
  }
}
