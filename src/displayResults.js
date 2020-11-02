/**
 * Module for displaying game results.
 *
 * @module src/displayResluts.js
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Displays the result of the current game.
 *
 * @param {object} player - The current Player.
 * @param {object} dealer - The Dealer of the game.
 * @param {object} winner - The one of them who won.
 */
export function displayResluts (player, dealer, winner) {
  if (winner === player) {
    winner = 'Player'
  } else {
    winner = 'Dealer'
  }
  console.log(`${player.showHand()} \n${dealer.showHand()} \n${winner} wins!\n`)
}
