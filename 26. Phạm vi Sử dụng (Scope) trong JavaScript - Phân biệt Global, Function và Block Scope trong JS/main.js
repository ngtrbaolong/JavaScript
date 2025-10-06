// phạm vi sử dụng scope trong js
// global scope
var globalVar = "I am a global variable";
function checkGlobal() {
    console.log(globalVar); // Accessible here
}
checkGlobal();
console.log(globalVar); // Accessible here
// function scope
function functionScope() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}
