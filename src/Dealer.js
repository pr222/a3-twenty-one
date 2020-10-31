/**
 * Module for Dealer sub-class.
 *
 * @module src/Player
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Player } from './Player.js'

/**
 * Class representing a dealer.
 *
 * @class Dealer
 * @augments Player - Inherits from the Player class.
 */
export class Dealer extends Player {
//   constructor () {
//     super()
//   }

  /**
   * Displays what cards the dealer has in its hand.
   *
   * @memberof Dealer
   */
  showHand () {
    const value = this.value()
    console.log(`${this.name}: ${this.hand.join(' ')} (${value})`)
  }
}
