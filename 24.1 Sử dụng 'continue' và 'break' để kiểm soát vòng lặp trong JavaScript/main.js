//24.1 Sử dụng 'continue' và 'break' để kiểm soát vòng lặp trong JavaScript
// viết chương trình nhập vào số nguyên n, in ra kết quả n!
// let n = parseInt(prompt("Nhập vào số nguyên n: "));
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log(`Giai thừa của ${n} là: ${factorial}`);
/*Viết chương trình nhập số a từ bàn phím
-nếu a chẵn thì tính tổng các số chẵn từu 0 đến a
-nếu a lẻ thì in ra dòng chữ "a là số lẻ" và dừng chương trình*/
let a = parseInt((prompt("Nhập vào số nguyên a: ")));
let sum = 0;
if (a % 2 === 0) {
    for (let i = 0; i <= a; i += 2) {
        sum += i;
    }
    console.log(`Tổng các số chẵn từ 0 đến ${a} là: ${sum}`);
} else {
    console.log(`${a} là số lẻ`);
}
