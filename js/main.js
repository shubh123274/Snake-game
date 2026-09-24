import { Game } from './game.js';

const board = document.getElementById('game-board');

let game;
let interval;

const createBoard = () => {

    board.innerHTML = '';

    for (let y = 0; y < game.rows; y++) {

        for (let x = 0; x < game.columns; x++) {

            const cell = document.createElement('div');

            cell.classList.add('cell');

            cell.dataset.x = x;
            cell.dataset.y = y;

            board.appendChild(cell);
        }
    }
};


const Render = () => {

    const cells = board.children;
    for (const cell of cells) {

        cell.classList.remove(
            "snake",
            "head",
            "food"
        );

    }

    // Remove old snake
    Array.from(cells).forEach(cell => {
        cell.classList.remove('snake');
        cell.classList.remove('head');
    });

    // Draw snake
    game.snake.getBody().forEach((segment, index) => {

        const cell = board.querySelector(
            `[data-x="${segment.x}"][data-y="${segment.y}"]`
        );

        if (!cell) return;

        cell.classList.add('snake');

        if (index === 0) {
            cell.classList.add('head');
        }
    });
};


const startGame = () => {

    clearInterval(interval);

    game = new Game();

    createBoard();

    Render();

    interval = setInterval(() => {

        game.update();

        Render();
        console.log("Render() & game Update() called")

        if (!game.snake.running) {
            clearInterval(interval);
        }

    }, game.snake.speed);
};


startGame();