/**
 * Module for creating new players.
 *
 * @module src/playersToTable
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { inputValidation } from './inputValidation.js'
import { Player } from './Player.js'

/**
 * Creates an array of Player objects.
 *
 * @throws {Error} - Throws custom error if input of players are not valid.
 * @returns {Array} - Returns an array with Player instances.
 */
export function playersToTable () {
  // First, check if input is a valid number of players.
  const nrOfPlayers = inputValidation()

  const players = []

  // Create as many players as stated for the game into the array.
  for (let i = 1; i <= nrOfPlayers; i++) {
    players.push(new Player(i))
  }

  return players
}
