import { generateId } from "../Utils/generateId.js";




export class Item {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.cardId = data.cardId
  }


  get Template() {
    return/*html*/`
    <li class="list-group-item d-flex justify-content-between align-items-baseline crime-border">${this.description}
    <i class="mdi mdi-close text-danger" onclick="app.itemsController.deleteItem('${this.id}')"></i></li>
    `
  }
}