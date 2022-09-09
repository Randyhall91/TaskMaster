import { appState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/Store.js"




class ItemsService {

  deleteItem(itemId) {
    let items = appState.items.filter(i => i.id != itemId)
    appState.items = items
    saveState('items', appState.items)
  }

  createItem(newItem) {
    let item = new Item(newItem)

    appState.items = [...appState.items, item]
    saveState('items', appState.items)
  }


}


export const itemService = new ItemsService