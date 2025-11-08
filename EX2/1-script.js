// Définition des constructeurs
function Etudiant(nom, prenom, age, cne) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.cne = cne;

// Méthode pour l'étudiant
  this.etudier = function() {
    console.log(`${this.nom} ${this.prenom} est en train d'étudier.`);
  };
}
// Constructeur pour Professeur
function Professeur(nom, age, cin) {
  this.nom = nom;
  this.age = age;
  this.cin = cin;

  // Méthode pour le professeur
  this.enseigner = function() {
    console.log(`${this.nom} est en train d'enseigner.`);
  };
}

// Création des instances
let e1 = new Etudiant("Az", "Ahmed", 20, "CNE12345");
let e2 = new Etudiant("Char", "Souail", 22, "CNE67890");
// Création d'une instance de Professeur
let p1 = new Professeur("Khalid", 38, "CIN123456");

// Tableau pour stocker les étudiants
let etudiants = [e1, e2];

// Tri des étudiants par nom, puis prénom, puis âge
etudiants.sort(function(a, b) {
  if (a.nom < b.nom) return -1;
  if (a.nom > b.nom) return 1;
  if (a.prenom < b.prenom) return -1;
  if (a.prenom > b.prenom) return 1;
  return a.age - b.age;
});
// Affichage des étudiants triés
console.log("Liste des étudiants triés :");
etudiants.forEach(e => {
  console.log(`${e.nom} ${e.prenom} - ${e.age} ans - CNE: ${e.cne}`);
});
// Test des méthodes
console.log("\nTest des méthodes :");
e1.etudier();
p1.enseigner();
