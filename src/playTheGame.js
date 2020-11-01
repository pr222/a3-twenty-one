import { Deck } from './Deck.js'



export function playTheGame (gamer, library) {
  // Deal card
  Deck.dealCard(gamer.hand, library)
  gamer.showHand()
  let pleased = false
  let won = false
  let result = 'One more card please?'

  if (gamer.value() === 21) {
    result = 'You won at 21!'
    won = true
  } else {
    while (gamer.hand.length < 5 && gamer.value() < 21) {
      // Wincon
      if (gamer.value() === 21) {
        result = 'You won at 21!'
        break
      } else if (gamer.hand.length === 5 && gamer.value() < 21) {
        result = 'You won with 5 cards and less than 21 points!'
      } else if (gamer.value() > 21) {
        result = 'Sorry, you BUST!'
      } else {
        result = 'continue'
      }
      // Deal card
      Deck.dealCard(gamer.hand, library)
    }
    gamer.showHand()
    console.log(result)
  }



//   // gamer only needs to discard hand if there is any cards.
//   if (gamer.hand.length > 0) {
//     gamer.discard(discardPile)
//   }
}
