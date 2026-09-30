import { Snake } from './snake.js';

export class Game {

    constructor() {

        this.rows = 20;
        this.columns = 20;

        this.snake = new Snake();

        this.speed = 150;

        this.direction = "RIGHT";
        this.nextDirection = "RIGHT";

        this.running = true;
    }


    setDirection(direction) {

        const opposite = {

            UP: "DOWN",
            DOWN: "UP",
            LEFT: "RIGHT",
            RIGHT: "LEFT"

        };

        if (opposite[this.direction] === direction) {
            return;
        }

        this.nextDirection = direction;
    }


    update() {

        if (this.running === false) {
            return;
        }

        this.direction = this.nextDirection;


        const movement = {

            UP: { x: 0, y: -1 },
            DOWN: { x: 0, y: 1 },
            LEFT: { x: -1, y: 0 },
            RIGHT: { x: 1, y: 0 }

        };


        const head = this.snake.getHead();


        const newHead = {

            x: head.x + movement[this.direction].x,

            y: head.y + movement[this.direction].y

        };


        this.snake.move(newHead);

        this.snake.removeTail();
    }
}