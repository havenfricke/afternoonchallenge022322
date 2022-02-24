import { ProxyState } from "../AppState.js"
import { mySpellsService } from "../Services/MySpellsService.js"

async function _getMySpells() {
  try {
    await mySpellsService.getMySpells()
  } catch (error) {
    console.error(error)
  }
}

function _drawMySpells() {
  let template = ''
  ProxyState.mySpells.forEach(s => template += s.mySpellsTemplate)
  document.getElementById('spell-right').innerHTML = template
  console.log('drawMyspells')
}
export class MySpellsController {
  constructor() {
    ProxyState.on('mySpells', _drawMySpells)
    console.log('MySpellsController - loaded')
    _getMySpells()
  }

  async saveSpell() {
    try {
      await mySpellsService.saveSpell()
    } catch (error) {
      console.error(error)
    }
  }

  async removeSpell() {
    try {
      await mySpellsService.removeSpell()
    } catch (error) {
      console.log(error)
    }
  }
  setActiveSpell(id) {
    mySpellsService.setActiveSpell(id)
  }

  async prepareSpell(id) {
    try {
      await mySpellsService.prepareSpell(id)
    } catch (error) {
      console.error(error);
    }
  }
}
