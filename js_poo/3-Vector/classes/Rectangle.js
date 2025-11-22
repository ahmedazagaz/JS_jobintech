class Rectangle {
    constructor(l = 1, L = 1) {
        this.l = l;
        this.L = L;
    }

    afficher() {
        console.log(`Rectangle: l=${this.l}, L=${this.L}`);
    }
}

export default Rectangle;
