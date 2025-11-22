import Vecteur2D from './classes/Vecteur2D.js';
import Point from './classes/Point.js';
import Segment from './classes/Segment.js';
import Rectangle from './classes/Rectangle.js';
import Carre from './classes/Carre.js';

// -- Test Vecteur2D --
console.log("-- Vecteurs --");
let v1 = new Vecteur2D();
let v2 = new Vecteur2D(2, 3);
v1.afficher();   // Vecteur2D: x=0, y=0
v2.afficher();   // Vecteur2D: x=2, y=3

// -- Test Rectangle et Carré --
console.log("\n=== Rectangle & Carré ===");
let r = new Rectangle(4, 5);
let c = new Carre(3);
r.afficher();    // Rectangle: l=4, L=5
c.afficher();    // Carré: côté=3

// -- Test Point et Segment --
console.log("\n=== Point & Segment ===");
let p1 = new Point(1, 1);
let p2 = new Point(2, 3);
p1.afficher();   // Point: x=1, y=1
p2.afficher();   // Point: x=2, y=3

let s = new Segment(0, 0, 5, 5);
s.afficher();

