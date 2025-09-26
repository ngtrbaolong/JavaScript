//1. Random trong từ [0->1)]
let randomValue = Math.random();
console.log(`Random Value: ${randomValue}`);
//2. Random trong từ [0->10)
let randomValue1 = Math.random() * 10;
console.log(`Random Value 1: ${randomValue1}`);
//3. Random trong từ [0->10]
let randomValue2 = parseInt(Math.random() * 10);
console.log(`Random Value 2: ${randomValue2}`);
//4. Random trong từ [min->max]
let min = 5;
let max = 20;
let randomValue3 = parseInt(Math.random() * (max - min) + min);
console.log(`Random Value 3: ${randomValue3}`);