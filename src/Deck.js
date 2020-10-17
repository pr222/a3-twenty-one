/**
 * Module for the type PlayingCard.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { Ranks } from './Ranks.js'
import { Suits } from './Suits.js'
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a deck.
 *
 * @class
 */
export class Deck {
  /**
   * Creates an array of 52 playing cards representing a deck.
   *
   * @returns {PlayingCard[]} An array of 52 PlayingCard objects.
   */
  static create () {
    const suitKeys = Object.keys(Suits)
    const rankKeys = Object.keys(Ranks)
    const deck = new Array(suitKeys.length * rankKeys.length)
    let i = 0

    for (const suitKey of suitKeys) {
      for (const rankKey of rankKeys) {
        deck[i++] = new PlayingCard(Ranks[rankKey], Suits[suitKey])
      }
    }

    return deck
  }

  /**
   * Shuffles the array of playing cards in place.
   *
   * @param {PlayingCard[]} deck - The array of PlayingCard objects to shuffle.
   * @returns {PlayingCard[]} The shuffled array of PlayingCard objects.
   */
  static shuffle (deck) {
    let i = deck.length
    let j
    let x

    while (i) {
      j = (Math.random() * i) | 0 // using bitwise OR 0 to floor a number
      x = deck[--i]
      deck[i] = deck[j]
      deck[j] = x
    }

    return deck
  }
}
