const numbers = [1, 3, 4];

const fact = n => 
  n <= 1 ? 1 : n * fact(n - 1);

const transform = list => 
  list.map(fact);

console.log(transform(numbers)); // [1, 6, 24]
