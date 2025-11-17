class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(`Vecteur2D: x=${this.x}, y=${this.y}`);
    }
}

export default Vecteur2D;
