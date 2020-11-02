export function displayResluts (player, dealer, winner) {
  if (winner === player) {
    winner = 'Player'
  } else {
    winner = 'Dealer'
  }
  console.log(`${player.showHand()} \n${dealer.showHand()} \n${winner} wins!\n`)
}
