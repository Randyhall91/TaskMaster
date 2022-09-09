import { CardsController } from "./Controllers/CardsController.js";
import { ItemsController } from "./Controllers/ItemsController.js";


class App {
  itemsController = new ItemsController()
  cardsController = new CardsController()
}

window["app"] = new App();
