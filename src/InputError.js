/**
 * Custom error module for InputError.
 *
 * @module src/InputError
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
