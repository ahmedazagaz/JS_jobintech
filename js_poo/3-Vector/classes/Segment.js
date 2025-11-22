import Point from './Point.js';

class Segment {
    constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }

    afficher() {
        console.log("Segment:");
        this.orig.afficher();
        this.extrem.afficher();
    }
}

export default Segment;
