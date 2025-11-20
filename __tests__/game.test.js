/**
 * @jest-environment jsdom
 */

import Game from '../src/game';

describe('Game class', () => {
  let container;
  let game;

  beforeEach(() => {
    // Создаем контейнер-клетки для тестов
    document.body.innerHTML = '<div id="game-field"></div>';
    container = document.getElementById('game-field');
    game = new Game(container);
  });

  test('should create 16 cells', () => {
    game.createField();
    expect(game.cells.length).toBe(16);

    const cellElements = container.querySelectorAll('.cell');
    expect(cellElements.length).toBe(16);
  });

  test('should spawn goblin in one of the cells', () => {
    game.createField();
    game.spawnGoblin();

    expect(game.goblin).not.toBeNull();
    expect(game.activeIndex).not.toBeNull();

    const cellsWithGoblin = game.cells.filter(cell =>
      cell.contains(game.goblin)
    );

    expect(cellsWithGoblin.length).toBe(1);
  });

  test('goblin should move to another cell', () => {
    game.createField();
    game.spawnGoblin();

    const oldIndex = game.activeIndex;

    game.moveGoblin();
    const newIndex = game.activeIndex;

    expect(newIndex).not.toBe(oldIndex);

    const cellsWithGoblin = game.cells.filter(cell =>
      cell.contains(game.goblin)
    );

    expect(cellsWithGoblin.length).toBe(1);
  });

  test('moveGoblin should not leave goblin duplicates', () => {
    game.createField();
    game.spawnGoblin();

    // Двигаем несколько раз
    for (let i = 0; i < 10; i++) {
      game.moveGoblin();
    }

    const goblins = container.querySelectorAll('.goblin');
    expect(goblins.length).toBe(1);
  });
});
