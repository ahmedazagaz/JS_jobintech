const numbers = [1, 7, 10, 9, 8];

const max = numbers.reduce((acc, n) => (n > acc ? n : acc), numbers[0]);

console.log(max); // 10
