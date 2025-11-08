const Rectangle = require('./Rectangle');

class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

module.exports = Carre;
