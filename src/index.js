import './styles.css';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('game-field');
  const game = new Game(field);
  game.init();
});
