/**
 * Module for getting the game results.
 *
 * @module src/resluts
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Decides who won the game and yield the result.
 *
 * @param {object} player - The current Player.
 * @param {object} dealer - The Dealer of the game.
 * @returns {string} - Representation of game results.
 */
export function resluts (player, dealer) {
  let winner = ''

  // Check if the player or dealer won.
  if (player.win === true || dealer.bust === true) {
    winner = 'Player'
  } else if (player.bust === true || dealer.win === true || dealer.points >= player.points) {
    winner = 'Dealer'
  } else {
    winner = 'Player'
  }

  return `${player.showHand()} \n${dealer.showHand()} \n${winner} wins!\n`
}
