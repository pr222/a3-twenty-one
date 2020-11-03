/**
 * Module for Dealer sub-class.
 *
 * @module src/Dealer
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
  /**
   * Displays what cards the dealer has in its hand.
   *
   * @memberof Dealer
   * @returns {string} - Presents what cards are in the hand and the total points.
   */
  showHand () {
    return `${this.name}: ${this.hand.join(' ')} (${this.points}) ${this.busted}`
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

    // Reset the property values for next game turn.
    if (this.bust === true) {
      this.bust = false
      this.busted = ''
    }
    if (this.win === true) {
      this.win = false
    }
    if (this.satisfied === true) {
      this.satisfied = false
    }
    if (this.points > 0) {
      this.points = 0
    }

    return this
  }
}
