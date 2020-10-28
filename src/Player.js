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
    const discarded = to.push(this.hand)
    this.hand = []
    return discarded
  }

  /**
   * Method to show what the player has in its hand.
   *
   * @memberof Player
   */
  showHand () {
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
    const value = this.hand.reduce((value, playingCard) => value + playingCard, 0)
    console.log(`Hand of cards: ${this.hand.join(' ')} (${value})`)
  }
}
