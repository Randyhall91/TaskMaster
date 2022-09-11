import { appState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/Store.js"




class ItemsService {

  isChecked(id) {

    let item = appState.items.forEach(i => {
      if (i.id == id) {
        i.checked = !i.checked
      }
    })

    appState.emit('items')
    saveState('items', appState.items)
    // @ts-ignore
  }



  deleteItem(itemId) {

    if (confirm('Are you sure you want to delet this item?') == true) {
      let items = appState.items.filter(i => i.id != itemId)
      appState.items = items
      saveState('items', appState.items)


    } else {

    }
  }

  createItem(newItem) {
    let item = new Item(newItem)

    appState.items = [...appState.items, item]
    saveState('items', appState.items)
  }


}


export const itemService = new ItemsService