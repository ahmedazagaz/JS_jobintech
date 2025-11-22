const products = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 }
];

// TVA de 25%
const TVA = 0.25;

// Calcul du prix total TTC
const totalTTC = products
  .map(product => product.price * (1 + TVA)) // appliquer la TVA à chaque produit
  .reduce((sum, price) => sum + price, 0);  // additionner tous les prix

console.log("Prix total TTC :", totalTTC); // Affiche : Prix total TTC : 106.25
