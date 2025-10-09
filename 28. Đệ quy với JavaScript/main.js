// Đệ quy trong JavaScript
// Tính N!=N*(N-1)!..1
// function giaiThua(n){
//     if (n === 0 || n === 1){
//         return 1;
//     }else{
//         return n * giaiThua(n-1);
//     }
// }
// //Gọi hàm giai thừa
// let ketQua = giaiThua(5);
// console.log(ketQua); // 120

//vd2 Tính dãy Fibonacci
function f(n){
    if (n <= 2){
        return 1;
    } else {
        return f(n-1) + f(n-2);
    }
}
//gọi hàm tính Fibonacci
let ketQua2 = f(18);
console.log(ketQua2); // 55