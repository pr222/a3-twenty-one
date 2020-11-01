/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { InputError } from './InputError.js'
import { EmptyDeckError } from './EmptyDeckError.js'
// import { PlayingCard } from './PlayingCard.js'
import { Player } from './Player.js'
import { Dealer } from './Dealer.js'
import { playersToTable } from './playersToTable.js'
// import { playTheGame } from './playTheGame.js'

try {
  // Get array of players to the table.
  // It also checks that input arguments for players are valid.
  const players = playersToTable()

  // Create library with 52 playing cards.
  const library = Deck.create()

  // Shuffle the library.
  Deck.shuffle(library)

  // Create an starting empty discard pile.
  const discardPile = []

  // Bring the dealer to the table.
  const dealer = new Dealer('Dealer')

  console.log('Starting library:', library.join(', '), '\n')

  // Deal the first card to all players from the library.
  for (let i = 0; i < players.length; i++) {
    Deck.dealCard(players[i].hand, library, discardPile)
    players[i].showHand()
  }

  for (let i = 0; i < players.length; i++) {
  //
    while (players[i].hand && players[i].value() < 21) {
      Deck.dealCard(players[i].hand, library, discardPile)
      if (players[i].value() === 21) {
        console.log('You won at 21!')
        players[i].showHand()
        break
      } else if (players[i].hand.length === 5 && players[i].value() < 21) {
        console.log('Winner at 5 cards under 21 points!')
        players[i].this.showHand()
        break
      } else if (players[i].value() > 21) {
        console.log('Sorry, you busted!')
        players[i].showHand()
        break
      } else if (players[i].value() > 10) {
        console.log('Satisfied')
        players[i].showHand()
        break
      } else {
        players[i].showHand()
        continue
      }
    }
    //
  }


  // Deal the first card to all players from the library.
  // for (let i = 0; i < players.length; i++) {
    // playTheGame(players[i], library)
    // playTheGame(dealer, library)

    // let pleased = false
    // let playerWinner = false
    // let playerLoser = false

    // Deck.dealCard(players[i].hand, library)
    // players[i].showHand()
    // if (players[i].value() === 21) {
    //   console.log('You won at 21!')
    //   winner = true
    // }
    // if (players[i].hand.length === 5 && players[i].value() < 21) {
    //   console.log('Hand with 5 cards and less than 21.')
    //   winner = true
    // }
    // if (players[i].value() > 21) {
    //   console.log('Busted!')
    //   loser = true
    // }

    // while (players[i].hand.length < 5 && players[i].value() < 14) {
    //   console.log('New card')
    //   Deck.dealCard(players[i].hand, library)
    //   players[i].showHand()
    //   // Check wincon
    //   if (players[i].value() === 21) {
    //     // console.log(players[i].showHand())
    //     console.log('You won at 21!')
    //     playerWinner = true
    //   } else if (players[i].hand.length === 5 && players[i].value() < 21) {
    //     console.log('Hand with 5 cards and less than 21.')
    //     playerWinner = true
    //   } else if (players[i].value() > 21) {
    //     // players[i].showHand()
    //     console.log('Busted!')
    //     playerWinner = false
    //   } else {
    //     playerWinner = true
    //     console.log('holding')
    //   }




    // }

    // if (playerWinner === true) {
    // if (players[i].value() === 21) {
    //   console.log('You won at 21!')
    //   winner = true
    // } else if (players[i].hand.length === 5 && players[i].value() < 21) {
    //   console.log('Hand with 5 cards and less than 21.')
    //   winner = true
    // } else if (players[i].value() > 21) {
    //   console.log('Busted!')
    //   loser = true
    // }
    // console.log(loser)
    // console.log(winner)
  //     while (dealer.hand.length < 5 && dealer.value() < 12) {
  //       console.log('New card')
  //       Deck.dealCard(dealer.hand, library)
  //       players[i].showHand()
  //       // Check wincon
  //       if (dealer.value() === 21) {
  //         // console.log(players[i].showHand())
  //         console.log('You won at 21!')
  //         playerWinner = false
  //       } else if (dealer.hand.length === 5 && dealer.value() < 21) {
  //         console.log('Hand with 5 cards and less than 21.')
  //         playerWinner = false
  //       } else if (dealer.value() > 21) {
  //         // players[i].showHand()
  //         console.log('Busted!')
  //         playerWinner = true
  //       } else {
  //         // playerWinner = true
  //         console.log('holding')
  //       }
  //     }
  //   } else if (playerWinner === false) {
  //     console.log('Dealer wins!')
  //   }

  //   // if (!pleased && !won) {
  //   //   console.log(players[i].showHand() + 'Busted!')
  //   //   console.log('Dealer: -')
  //   //   console.log('Dealer wins!')
  //   // }
  // }


  // players[i].showHand()
  // console.log(result)

    // players[i] only needs to discard hand if there is any cards.
    // if (dealer.hand.length > 0) {
    //   dealer.discard(discardPile)
    // }
    // players[i].discard(discardPile)
  
  // Deck.dealCard(players[0].hand, library, discardPile)
  // players[0].showHand()
  // Deck.dealCard(dealer.hand, library, discardPile)
  // dealer.showHand()



 
  dealer.showHand()
  // console.log('Discard Pile:', discardPile.join(', '), '\n')
  // for (let i = 0; i < players.length; i++) {
  //   players[i].showHand()
  // }

  // console.log('Library state:', library.join(', '), '\n')
  console.log('Discard Pile:', discardPile.join(', '), '\n')
} catch (err) {
  console.error(err.message)
  process.exitCode = 1

  if (err instanceof InputError) {
    process.exitCode = 26
  }

  if (err instanceof EmptyDeckError) {
    process.exitCode = 27
  }
}
