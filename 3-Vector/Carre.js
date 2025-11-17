import Rectangle from './Rectangle.js';

class Carre extends Rectangle {
    constructor(c = 1) {
        super(c, c);
    }

    afficher() {
        console.log(`Carré: côté=${this.l}`);
    }
}

export default Carre;
