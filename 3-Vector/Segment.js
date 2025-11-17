const Point = require('./Point');

class Segment {
    constructor(xOrig = 0.0, yOrig = 0.0, xExtrem = 1.0, yExtrem = 1.0) {
        this.orig = new Point(xOrig, yOrig);
        this.extrem = new Point(xExtrem, yExtrem);
    }

    afficher() {
        console.log("Segment :");
        this.orig.afficher();
        this.extrem.afficher();
    }
}

module.exports = Segment;
