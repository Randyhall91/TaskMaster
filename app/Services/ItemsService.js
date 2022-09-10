import { appState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/Store.js"




class ItemsService {

  isChecked(id, cardId) {

    let items = appState.items.filter(i => i.cardId = cardId)
    console.log(items);

    items.forEach(i => {
      if (i.id == id) {

        i.checked = !i.checked
      }
    })




    // it.forEach(i => {


    //   if (i.id = id) {
    //     // @ts-ignore
    //     i.checked = !item.checked
    //   }

    // })
    // @ts-ignore
    appState.emit('items')
    saveState('items', appState.items)
    // @ts-ignore
    // console.log(item.checked, 'the item that checked');
  }



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