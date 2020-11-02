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
    this.bust = false
    this.win = false
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
    return `Player #${this.name}: ${this.hand.join(' ')} (${this.value()}) ${this.result}`
  }

  /**
   * The main step of drawing cards.
   *
   * @param {Deck[]} deck - The deck cards are taken from.
   * @param {discard[]} discard - The place to discard cards.
   * @returns {object} - Returns this object.
   * @memberof Player
   */
  mainStep (deck, discard) {
    while (this.hand.length < 5 && this.value() < 21) {
      Deck.dealCard(this.hand, deck, discard)
      if (this.value() === 21) {
        this.win = 'Win!'

        break
      } else if (this.hand.length === 5 && this.value() < 21) {
        this.win = 'Win!'
        break
      } else if (this.value() > 21) {
        this.bust = 'Bust!'
        break
      } else if (this.value() > 13) {
        this.satisfied = true
        break
      } else {
        continue
      }
    }
    return this
  }
}
