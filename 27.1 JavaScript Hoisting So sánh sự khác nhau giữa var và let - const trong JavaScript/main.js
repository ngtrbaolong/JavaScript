/*
var có phạm vi là function scope
let và const có phạm vi là block scope
*/
functionScope();
// console.log(functionVar); // Error: functionVar is not defined
// console.log(blockVar); // Error: blockVar is not defined
if (true) {
    var functionVar = "I am a function variable";
    let blockVar = "I am a block variable";
    const blockConst = "I am a block constant";
    console.log(functionVar); // Accessible here
    console.log(blockVar); // Accessible here
    console.log(blockConst); // Accessible here
}