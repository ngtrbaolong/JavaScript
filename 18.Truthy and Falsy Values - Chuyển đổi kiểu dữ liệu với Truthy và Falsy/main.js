//18. Truthy and Falsy Values
// chúng ta có thể ép ngược lại từ số sang chuỗi
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log("Giá trị của b là: " + b);

//8 giá trị Falsy khi chuyển sang bool sẽ là false
// false, 0, -0, 0n, "", null, undefined, NaN
// các giá trị còn lại đều là Truthy khi chuyển sang bool sẽ là true
console.log(typeof 0n);
let c = Boolean (NaN)
console.log(c);
console.log(typeof c);
//ví dụ nếu kiểm tra 1 biến đã được gán giá trị hay undefined
let salary;
console.log(salary);
if(salary){
    console.log("defined1");
}else{
    console.log("salary is undefined");
}