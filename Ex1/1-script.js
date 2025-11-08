// Définition du constructeur de base Voiture
function Voiture(model, marque, annee, type, carburant) {
  this.model = model;
  this.marque = marque;
  this.annee = annee;
  this.type = type;
  this.carburant = carburant;
}
// Définition du constructeur Hyndai qui hérite de Voiture
function Hyndai(model, marque, annee, type, carburant, serie, hybride) {
  Voiture.call(this, model, marque, annee, type, carburant);
  this.serie = serie;
  this.hybride = hybride;

// Méthode spécifique à Hyndai
  this.alarmer = function() {
    console.log("Alerte sur la voiture " + this.model + " série " + this.serie);
  };
}

// Définition du constructeur Ford qui hérite de Voiture
function Ford(model, marque, annee, type, carburant, options) {
  Voiture.call(this, model, marque, annee, type, carburant);
  this.options = options;
}

// Création d'un tableau de voitures
let voitures = [];

// Ajout de différentes voitures
let v1 = new Hyndai("Tucson", "Hyundai", 2020, "SUV", "Essence", "Série X", true);
let v2 = new Ford("Focus", "Ford", 2018, "Compact", "Diesel", ["GPS", "Caméra"]);
let v3 = new Hyndai("Ioniq", "Hyundai", 2022, "Berline", "Électrique", "Série Z", true);

// Ajout des voitures au tableau
voitures.push(v1, v2, v3);

// Tri des voitures par année
voitures.sort(function(a, b) {
  return a.annee - b.annee;
});

// Affichage des voitures triées
console.log("Liste des voitures triées par année :");

// Utilisation de forEach pour afficher chaque voiture
voitures.forEach(function(v) {
  console.log(v.marque + " " + v.model + " - " + v.annee + " (" + v.carburant + ")");
});

// Appel de la méthode alarmer sur la première voiture Hyndai
v1.alarmer();
