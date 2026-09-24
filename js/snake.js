export class Snake {
    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 }
        ];

        this.speed = 500;
        this.direction = "RIGHT";
        this.nextDirection = "RIGHT";
        this.running = true;
    }

    getHead() {
        return this.body[0];
    }

    move(newHead) {
        this.body.unshift(newHead);
    }

    removeTail() {
        return this.body.pop();
    }

    grow(newHead) {
        this.body.unshift(newHead);
    }

    getBody() {
        return this.body;
    }
}