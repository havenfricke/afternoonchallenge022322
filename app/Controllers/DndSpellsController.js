import { ProxyState } from "../AppState.js"
import { dndSpellsService } from "../Services/DndSpellsService.js"

async function _getSpells() {
  try {
    await dndSpellsService.getSpells()
  } catch (error) {
    console.error(error)
  }
}

function _drawSpellsList() {
  let template = ''
  ProxyState.dndApiSpells.forEach(s => template += `<li class="mt-2 selectable rounded" onclick="app.dndSpellsController.getActiveSpell('${s.index}')">${s.name}</li>`)
  document.getElementById('spell-left').innerHTML = template
}

function _drawActiveSpell() {
  document.getElementById('spell-center').innerHTML = ProxyState.activeSpell.Template
}

export class DndSpellsController {
  constructor() {
    ProxyState.on('dndApiSpells', _drawSpellsList)
    ProxyState.on('activeSpell', _drawActiveSpell)
    console.log('dndspellscontroller loaded')
    _getSpells()
  }

  async getActiveSpell(index) {
    try {
      console.log('getting active spell')
      await dndSpellsService.getActiveSpell(index)
    } catch (error) {
      console.error(error, 'getActiveSpell - controller');
    }
  }
}