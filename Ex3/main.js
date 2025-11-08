const Vecteur2D = require('./Vecteur2D');
const Rectangle = require('./Rectangle');
const Carre = require('./Carre');
const Point = require('./Point');
const Segment = require('./Segment');

// Programme principal
console.log("--- Vecteur2D ---");
const v1 = new Vecteur2D();
const v2 = new Vecteur2D(3, 4);
v1.afficher();
v2.afficher();

console.log("--- Addition de deux Vecteur2D ---");
const v3 = v1.additionner(v2);
v3.afficher();

console.log("--- Rectangle et Carré ---");
const r1 = new Rectangle(5, 2);
const c1 = new Carre(4);
r1.afficher();
console.log(`Surface : ${r1.surface()}`);
c1.afficher();
console.log(`Surface : ${c1.surface()}`);

console.log("--- Point et Segment ---");
const p1 = new Point();
const p2 = new Point(2.5, 3.5);
p1.afficher();
p2.afficher();
const s1 = new Segment(0, 0, 5, 5);
s1.afficher();
