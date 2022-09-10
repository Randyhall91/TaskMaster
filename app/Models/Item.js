import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";




export class Item {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.cardId = data.cardId
    this.checked = data.checked || false
  }


  get Template() {
    return/*html*/`
    <li class="list-group-item d-flex align-items-baseline crime-border">
      <div class="me-auto">
        <input class="form-check-input me-auto" type="checkbox" onchange="app.itemsController.isChecked('${this.id}')" ${this.checked ? 'checked' : ''}>
        ${this.description}
      </div>
      <i class="mdi mdi-close text-danger" onclick="app.itemsController.deleteItem('${this.id}')"></i>
    </li>
    
    `
  }


}