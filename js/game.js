import { Snake } from './snake.js';

export class Game {
    constructor() {
        this.rows = 20;
        this.columns = 20;
        this.snake = new Snake();
    }

    update() {

        if (this.snake.running === false) return;

        this.snake.direction = this.snake.nextDirection;

        const movement = {
            UP: { x: 0, y: -1 },
            DOWN: { x: 0, y: 1 },
            LEFT: { x: -1, y: 0 },
            RIGHT: { x: 1, y: 0 }
        };

        const head = this.snake.getHead();

        const newHead = {
            x: head.x + movement[this.snake.direction].x,
            y: head.y + movement[this.snake.direction].y
        };

        this.snake.move(newHead);
        this.snake.removeTail();
    }
}