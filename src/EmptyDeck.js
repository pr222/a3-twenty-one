/**
 * Custom error module for EmptyDeck.
 *
 * @module src/EmptyDeck
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates an error for empty deck.
 *
 * @param message
 * @class EmptyDeck
 * @augments Error
 */
export class EmptyDeck extends Error {
  constructor (message) {
    super(message)
    this.name = 'EmptyDeck'
  }
}