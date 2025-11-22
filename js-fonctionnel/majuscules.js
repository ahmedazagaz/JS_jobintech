const texte = `jobintech`;

// Transformer le texte
const result = texte
  .split('\n')                    
  .map(line => line.toUpperCase())   // Convertit chaque ligne en majuscules
  .filter(line => line.includes('I')); // Garde seulement les lignes avec "I"

// Afficher le résultat
result.forEach(line => console.log(line));
