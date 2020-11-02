/**
 * Module for Player class.
 *
 * @module src/Player
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */
import { Deck } from './Deck.js'

/**
 * Representation of a player.
 *
 * @class
 */
export class Player {
  constructor (name) {
    this.name = name
    this.hand = []
    this.result = ''
    this.bust = ''
    this.win = ''
    this.satisfied = false
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
    return `Player #${this.name}: ${this.hand.join(' ')} (${this.value()}) ${this.bust}`
  }

  mainStep (deck, discard) {
    while (this.hand.length < 5 && this.value() < 21) {
      Deck.dealCard(this.hand, deck, discard)
      if (this.value() === 21) {
        this.win = 'Win!'
        console.log('Winner at 21!')
        break
      } else if (this.hand.length === 5 && this.value() < 21) {
        this.win = 'Win!'
        console.log('Winner at 5 cards under 21 points!')
        break
      } else if (this.value() > 21) {
        this.bust = 'Bust!'
        break
      } else if (this.value() > 13) {
        this.satisfied = true
        console.log('Satisfied')
        break
      } else {
        continue
      }
    }
    return this
  }

  endStep (discardPile) {
    // Player discards its hand at end of its turn.
    this.discard(discardPile)

    return this
  }
}
