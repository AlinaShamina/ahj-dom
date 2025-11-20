import goblin from './img/goblin.png';

export default class Game {
  constructor(container) {
    this.container = container;
    this.cells = [];
    this.activeIndex = null;
  }

  init() {
    this.createField();
    this.spawnGoblin();
    this.startMoving();
  }

  createField() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      this.container.appendChild(cell);
      this.cells.push(cell);
    }
  }

  spawnGoblin() {
    const img = document.createElement('img');
    img.className = 'goblin';
    img.src = goblin;
    this.goblin = img;

    const index = Math.floor(Math.random() * 16);
    this.activeIndex = index;
    this.cells[index].appendChild(img);
  }

  moveGoblin() {
    let newIndex = this.activeIndex;

    while (newIndex === this.activeIndex) {
      newIndex = Math.floor(Math.random() * 16);
    }

    this.cells[newIndex].appendChild(this.goblin);
    this.activeIndex = newIndex;
  }

  startMoving() {
    setInterval(() => this.moveGoblin(), 800);
  }
}
