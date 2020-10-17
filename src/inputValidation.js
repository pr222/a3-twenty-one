
/**
 * Module for validating commando arguments.
 *
 * @module src/inputValidation
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { InputError } from './customErrors.js'

/**
 * Takes the commando agruments and checks if they are valid for the game.
 *
 * @throws {Error} - Throws custom error if input of players are not valid.
 * @returns {number} - Returns the number of how many players there will be in the game.
 */
export function inputValidation () {
  let players = process.argv.slice(2)

  players = Number(players)

  // Begins game with 3 players if no starting arguments are present.
  if (players === 0) {
    players = 3
  }

  // Checks if input arguments are valid numbers for the game to start.
  if (Number.isInteger(players) && (players <= 7 || players === 20 || players === 50)) {
    return players
  } else {
    throw new InputError('Invalid number of players.')
  }
}
