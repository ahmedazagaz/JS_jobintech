const Vecteur2D = require('./Vecteur2D');
const Rectangle = require('./Rectangle');
const Carre = require('./Carre');
const Segment = require('./Segment');

// Vecteur2D

console.log("=== Vecteur2D ===");

const v1 = new Vecteur2D();
const v2 = new Vecteur2D(3, 4);

v1.afficher();
v2.afficher();

const somme = v1.additionner(v2);
console.log("Somme des vecteurs :");
somme.afficher();

// Rectangle & Carré

console.log("\n=== Rectangle & Carré ===");

const r = new Rectangle(4, 6);
const c = new Carre(5);

r.afficher();
console.log("Surface :", r.surface());

c.afficher();
console.log("Surface :", c.surface());

// Segment

console.log("\n=== Segment ===");

const s = new Segment(0, 0, 4, 3);
s.afficher();
