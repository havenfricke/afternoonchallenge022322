import { DndSpellsController } from "./Controllers/DndSpellsController.js";


class App {
  dndSpellsController = new DndSpellsController();

}

window["app"] = new App();
