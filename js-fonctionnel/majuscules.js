const texte = `jobintech`;

const result = texte
  .split('\n')               
  .map(line => line.toUpperCase())
  .filter(line => line.includes('I'));
result.forEach(line => console.log(line)); //JOBINTECH
