//14. hàm isNaN, Number
//8. Hàm Number(value) chuyển value sang số, nếu ko chuyển về được thì trả về NaN
let a = "123";
console.log(typeof a); //string
console.log(a); //123
console.log(Number(a)); //123
console.log(typeof Number(a)); //number
let b = "123abc";
console.log(Number(b)); //NaN
// let nhapso = Number(prompt("Mời bạn nhập số: "));
// console.log(nhapso);
// console.log(typeof nhapso);

console.log(isNaN(a));