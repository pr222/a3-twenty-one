import { Deck } from './Deck.js'
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'

//
export function mainStep (player, deck, discard) {
  while (player.hand.length < 5 && player.value() < 21) {
    // Deal a card.
    Deck.dealCard(player.hand, deck, discard)

    if (player.value() === 21) {
      player.win = true
      console.log('Winner at 21!')
      break
    } else if (player.hand.length === 5 && player.value() < 21) {
      player.win = true
      console.log('Winner at 5 cards under 21 points!')
      break
    } else if (player.value() > 21) {
      player.bust = true
      player.result = 'Busted!'
      break
    } else if (player instanceof Dealer) {
      if (player.value() > 15) {
        player.satisfied = true
        break
      } else {
        continue
      }
    } else if (player.value() > 10) {
      player.satisfied = true
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
