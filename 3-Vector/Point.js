class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(`Point: x=${this.x}, y=${this.y}`);
    }
}

export default Point;
