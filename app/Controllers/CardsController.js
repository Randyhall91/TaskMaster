import { appState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawCards() {
  let template = ''
  appState.cards.forEach(c => template += c.Template)
  console.log('draw Cards');
  setHTML('cards', template)
}

export class CardsController {
  constructor() {
    console.log('CardsController reporting for duty');
    appState.on('cards', _drawCards)
    appState.on('items', _drawCards)
    _drawCards()

  }

  createCard() {
    try {
      console.log('Create Card');
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newCard = getFormData(form)

      console.log('new Card');
      cardsService.createCard(newCard)
      // @ts-ignore
      form.reset()

    } catch (error) {
      console.log('error');
    }
  }

  deleteCard(cardId) {
    console.log('Delete Card');
    try {
      cardsService.deleteCard(cardId)
    } catch (error) {
      console.log('error');
    }
  }



}