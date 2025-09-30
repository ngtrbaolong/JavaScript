//20. JavaScript while loop
let i= 1;
while (i<=5){
    console.log(i);
    i++; 
}
//vidu: viết chương trình nhập vào số n từ bàn phím . n phải là số nguyên năm trong khoảng từ 1 đến 99. Néu nhập sai bắt nhập lại
let n = prompt("Nhập vào số n (1-99): ");
console.log(n);
while(isNaN(n) || n<1 || n>99 || n % 1 != 0){
    n = prompt ("Nhập sai! Vui lòng nhập lại số n (1-99): ");
}
alert("Bạn đã nhập đúng số n: " + n);