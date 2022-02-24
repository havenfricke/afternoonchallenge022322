
export class Spell {
  constructor(data) {
    this.index = data.index
    this.id = data.id || ''
    this.name = data.name
    this.description = data.description || data.desc.join(' ')
    this.level = data.level
    this.range = data.range
    this.duration = data.duration
    this.components = data.components
    this.prepared = data.prepared || false
  }
  get Template() {
    return ` 
    <h3 class="text-center border-bottom p-3">${this.name}</h3>
    <p class="text-center">${this.duration} | Level ${this.level} | ${this.range}</p>
    <p style="height:60vh;width:100%;font:16px Arial, Serif;overflow:auto;" class="p-3">${this.description}</p>
    <div class="d-flex justify-content-center">
      ${this.ButtonTemplate}
    </div>
    `
  }

  get ButtonTemplate() {
    let button = ''
    if (this.id) {
      button = `<button class="col-4 rounded-pill selectable btn-danger fs-4 p-1 mb-4" onclick="app.mySpellsController.removeSpell()">Remove</button>`
    } else {
      button = `<button class="col-4 rounded-pill selectable btn-success fs-4 p-1 mb-4" onclick="app.mySpellsController.saveSpell()">+</button>`
    }
    return button
  }

  get mySpellsTemplate() {
    return `
    <div class="p-3 border-bottom text-dark rounded text-center col-8 bg-light mt-4">
    <h4>${this.name}</h4>
    <div class="col d-flex p-3 align-items-center justify-content-center">
      <input class="p-3 col-2" type="checkbox"> READY SPELL
      <div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="col-6 btn-info selectable rounded-pill" onclick="app.mySpellsController.setActiveSpell('${this.id}')">INFO</button>
    </div>
  </div>
  `
  }
}
