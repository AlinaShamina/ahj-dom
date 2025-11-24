import './styles.css';
import goblinImg from './pic/goblin.png';

const FIELD_SIZE = 4;
const gameField = document.querySelector('#game-field');

for (let i = 0; i < FIELD_SIZE ** 2; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameField.append(cell);
}

const goblin = document.createElement('img');
goblin.src = goblinImg;
goblin.classList.add('goblin');

let intervalId;

function moveGoblin() {
  const cells = document.querySelectorAll('.cell');
  const randomCell = cells[Math.floor(Math.random() * cells.length)];

  if (goblin.parentNode) {
    goblin.parentNode.removeChild(goblin);
  }
  randomCell.append(goblin);
}

function start() {
  intervalId = setInterval(moveGoblin, 1000);
}

function stop() {
  clearInterval(intervalId);
}

moveGoblin();
start();
