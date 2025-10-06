// Tìm hiểu về khai báo hàm
//Functione Declaration
function greet(name) {
    return `Hello, ${name}!`;
}  
console.log(greet("Alice")); // Output: Hello, Alice!
//Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8
//Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 2)); // Output: 8
// Function calling other Function
function nhan(a, b){
    return a * b;
}
function congNhan(a, b, c){
    let sum = a + b;
    let product = nhan(sum, c);
    return product;
}
console.log(congNhan(2, 3, 4)); // Output: 20