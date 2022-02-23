
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
      <button class="col-4 rounded-pill selectable btn-success p-2 mb-4" onclick="app.">Add</button>
    </div>
    `
  }

}
