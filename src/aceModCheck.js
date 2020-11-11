/**
 * Module for checking if ace in hand should add points for the player.
 *
 * @module src/aceModCheck
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Adds 13 points for the player if beneficial with an Ace in hand.
 *
 * @param {object} player - The player of the turn.
 * @returns {object} - The player of the turn with updated points.
 */
export function aceModCheck (player) {
  let modifier = 0
  player.points = player.value()

  for (let i = 0; i < player.hand.length; i++) {
    // If a card is an Ace, and total potential value is less than 21, add 13 to modifier.
    // (Total potential value includes modifier in case of several Aces in one hand.)
    if (player.hand[i].rank === 1 && (player.points + modifier + 13) < 21) {
      modifier += 13
    }
  }
  // Add modifier to points.
  player.points = player.points + modifier

  return player
}
