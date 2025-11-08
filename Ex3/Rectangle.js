class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }
    afficher() {
        console.log(`${this.nom} (longueur=${this.longueur}, largeur=${this.largeur})`);
    }
    surface() {
        return this.longueur * this.largeur;
    }
}

module.exports = Rectangle;
