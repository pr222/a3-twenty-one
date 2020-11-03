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
 * @param {library[]} library - The deck cards are taken from.
 * @param {discardPile[]} discardPile - The place to discard cards.
 * @returns {string} - Representation of game results.
 */
export function displayResluts (player, dealer) {
  let winner = ''

  if (player.win === true || dealer.bust === true) {
    winner = 'Player'
  } else if (player.bust === true || dealer.win === true || dealer.points >= player.points) {
    winner = 'Dealer'
  } else {
    winner = 'Player'
  }

  return `${player.showHand()} \n${dealer.showHand()} \n${winner} wins!\n`
}
