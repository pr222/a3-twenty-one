import { Deck } from './Deck.js'


// NOT USED!
export function mainStep (player, deck, discard) {
  while (player.hand.length < 5 && player.value() < 21) {
    Deck.dealCard(player.hand, deck, discard)
    if (player.value() === 21) {
      player.win = 'Win!'
      console.log('Winner at 21!')
      break
    } else if (player.hand.length === 5 && player.value() < 21) {
      player.win = 'Win!'
      console.log('Winner at 5 cards under 21 points!')
      break
    } else if (player.value() > 21) {
      player.bust = 'Bust!'
      break
    } else if (player.value() > 10) {
      player.satisfied = true
      console.log('Satisfied')
      break
    } else {
      continue
    }
  }

//   if (player.win === 'Win!') {
//     console.log(player.showHand())
//     // console.log(dealer.showHand())
//     console.log('Player wins!', '\n')
//   }
//   if (player.bust === 'Bust!') {
//     console.log(player.showHand())
//     // console.log(dealer.showHand())
//     console.log('Player busts!', '\n')
//   } else {
    
//   }

  return player
}
