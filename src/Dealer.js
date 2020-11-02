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
  // constructor (name) {
  //   super(name)
  // }

  /**
   * Displays what cards the dealer has in its hand.
   *
   * @memberof Dealer
   * @returns {string} - A presentation of cards in hand and their summed up value.
   */
  showHand () {
    return `${this.name}: ${this.hand.join(' ')} (${this.value()}) ${this.result}`
  }

  /**
   * End step which cleans up after playing the cards.
   *
   * @param {Array} discardPile - The place to discard cards.
   * @returns {object} - Returns this dealer.
   * @memberof Dealer
   */
  endStep (discardPile) {
    // Dealer discards its hand after playing against a player.
    if (this.hand.length > 0) {
      this.discard(discardPile)
    }
    // Reset properties for next gameturn.
    if (this.bust === true) {
      this.bust = false
      this.result = ''
    }
    if (this.win === true) {
      this.win = false
    }
    return this
  }
}
