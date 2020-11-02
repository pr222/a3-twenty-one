/**
 * Module for Dealer sub-class.
 *
 * @module src/Player
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Player } from './Player.js'

/**
 * Representation of a dealer.
 *
 * @class Dealer
 * @augments Player - Inherits from the Player class.
 */
export class Dealer extends Player {
  // constructor () {
  //   super()
  // }

  /**
   * Displays what cards the dealer has in its hand.
   *
   * @memberof Dealer
   * @returns {string} - A presentation of cards in hand and their summed up value.
   */
  showHand () {
    return `${this.name}: ${this.hand.join(' ')} (${this.value()})`
  }
}
