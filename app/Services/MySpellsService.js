import { ProxyState } from "../AppState.js";
import { Spell } from "../Models/Spell.js";
import { sandboxApi } from "./AviosService.js";

class MySpellsService {

  async getMySpells() {
    const res = await sandboxApi.get()
    console.log('getMySpells - MySpellsController', res.data)
    ProxyState.mySpells = res.data.map(s => new Spell(s))
  }
  async saveSpell() {
    let spell = ProxyState.activeSpell
    const res = await sandboxApi.post('', spell)
    console.log('saveSpell', res.data)
    ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data)]
  }

  setActiveSpell(id) {
    let spell = ProxyState.mySpells.find(s => s.id == id)
    ProxyState.activeSpell = spell
  }
  removeSpell() {
    let id = ProxyState.activeSpell.id
    const res = sandboxApi.delete(id)
    console.log(res.data)
    ProxyState.activeSpell = {}
    ProxyState.mySpells = ProxyState.mySpells.filter(s => s.id != id)
  }
}


export const mySpellsService = new MySpellsService()