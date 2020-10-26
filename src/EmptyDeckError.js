/**
 * Custom error module for EmptyDeck.
 *
 * @module src/EmptyDeckError
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates an error for empty deck.
 *
 * @param message
 * @class EmptyDeckError
 * @augments Error
 */
export class EmptyDeckError extends Error {
  constructor (message) {
    super(message)
    this.name = 'EmptyDeckError'
  }
}
