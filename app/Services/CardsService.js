import { appState } from "../AppState.js"
import { Card } from "../Models/Card.js"
import { saveState } from "../Utils/Store.js"


class CardsService {
  deleteCard(cardId) {

    if (confirm('Are you sure you want to delet this List?') == true) {
      let cards = appState.cards.filter(c => c.id != cardId)
      appState.cards = cards
      saveState('cards', appState.cards)

    } else {
      return
    }
  }


  createCard(newCard) {
    let card = new Card(newCard)

    appState.cards = [...appState.cards, card]
    saveState('cards', appState.cards)
  }


}

export const cardsService = new CardsService