
/**
 * Module for creating new players.
 *
 * @module src/playersToTable.js
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import { inputValidation } from './inputValidation.js'
import { Player } from './Player.js'

/**
 * Creates new players.
 *
 * @returns {Array} - Returns array of all the players.
 */
export function playersToTable () {
  // Begin checking if input is a valid number of players.
  const nrOfPlayers = inputValidation()

  // Make array out of players.
  const players = []

  // Create new instance of Player for each element of the players array.
  for (let i = 1; i <= nrOfPlayers; i++) {
    players.push(new Player(i))
  }

  return players
}
