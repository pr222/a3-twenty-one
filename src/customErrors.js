/**
 * Custom error module.
 *
 * @module src/customErrors
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates an error for faulty input.
 *
 * @param message
 * @class InputError
 * @augments Error
 */
export class InputError extends Error {
  constructor (message) {
    super(message)
    this.name = 'InputError'
  }
}

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
