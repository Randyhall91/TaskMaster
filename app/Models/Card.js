import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
import { Item } from "./Item.js"



export class Card {

  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId()
    this.color = data.color
  }


  get Template() {
    return /*html*/`
  <div class="col-4">
    <div class="card">
      <div class="card-body bg-${this.color}">
        <h5 class="card-title">${this.name}</h5>
        <p>Completed: ${this.totalChecked}/${this.totalItems}</p>
      </div>
      <ul class="list-group list-group-flush">
      ${this.Items}
      
      </ul>
      <div class="card-body ">
        <div class="d-flex flex-row">
          <form onsubmit="app.itemsController.createItem('${this.id}')">
            <input type="text" name='description' class="form-control" id="item" placeholder="Item">
              <div class='mt-2'>
                <button class="btn btn-primary" type="submit">New Item</button>
                <button onclick="app.cardsController.deleteCard('${this.id}')" class="btn btn-danger ms-2">Delete List</button>
              </div>
          </form>
        </div>
      </div>
    </div>

  </div>
  `
  }



  get Items() {
    let template = ''
    let items = appState.items.filter(i => i.cardId == this.id)
    items.forEach(i => template += i.Template)
    return template
  }

  get totalItems() {
    let items = appState.items.filter(i => i.cardId == this.id)
    console.log(items);
    let total = items.length

    console.log(total, 'total');

    return total
  }
  get totalChecked() {
    let items = appState.items.filter(i => i.cardId == this.id)
    let total = 0

    items.forEach(item => {
      if (item.checked == true) {
        total++

        console.log(total, 'checked');
      }

    })

    return total


  }



}