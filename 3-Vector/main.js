import Vecteur2D from './classes/Vecteur2D.js';
import Point from './classes/Point.js';
import Segment from './classes/Segment.js';
import Rectangle from './classes/Rectangle.js';
import Carre from './classes/Carre.js';

// Vecteurs
let v1 = new Vecteur2D();
let v2 = new Vecteur2D(2, 3);
v1.afficher();
v2.afficher();

// Rectangle et Carré
let r = new Rectangle(4, 5);
let c = new Carre(3);
r.afficher();
c.afficher();

// Point et Segment
let p1 = new Point(1, 1);
let p2 = new Point(2, 3);
p1.afficher();
p2.afficher();
let s = new Segment(0, 0, 5, 5);
s.afficher();
