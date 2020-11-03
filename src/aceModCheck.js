/**
 * Module for checking if ace in hand should add points for the player.
 *
 * @module src/aceModCheck.js
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Adds 13 points for the player if beneficial.
 *
 * @param {object} player - The player of the turn.
 * @returns {object} - The player of the turn with updated points.
 */
export function aceModCheck (player) {
  let modifier = 0
  player.points = player.value()

  for (let i = 0; i < player.hand.length; i++) {
    if (player.hand[i].rank === 1 && (player.points + 13) < 21) {
      modifier += 13
    }
  }

  player.points = player.points + modifier

  return player
}
