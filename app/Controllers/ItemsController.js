import { appState } from "../AppState.js";
import { itemService } from "../Services/ItemsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


export function _drawItems() {
  let template = ''
  appState.items.forEach(i => template += i.Template)
  console.log('draw Item');
  setHTML('items', template)
}

export class ItemsController {

  constructor() {
    // _drawItems()
  }

  createItem(cardId) {
    try {
      console.log('create Item');
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newItem = getFormData(form)
      // @ts-ignore
      newItem.cardId = cardId
      itemService.createItem(newItem)
      // @ts-ignore
      form.reset()


    } catch (error) {
      console.log('errorlist');
    }
  }
  deleteItem(itemId) {
    try {
      console.log('deleteItem');
      itemService.deleteItem(itemId)


    } catch (error) {
      console.log('error dellist');
    }
  }


}