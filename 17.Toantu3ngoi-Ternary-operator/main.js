// let dtb = parseFloat(prompt("Nhập điểm trung bình"));
// if (dtb >= 5 && dtb <= 6.5) {
//     console.log("Trung bình");
// } else if (dtb > 6.5 && dtb <= 7.5) {
//     console.log("Khá");
// } else if (dtb > 7.5 && dtb <= 9) {
//     console.log("Giỏi");
// } else if (dtb > 9 && dtb <= 10) {
//     console.log("Xuất sắc");
// } else {
//     console.log("Yếu");
// }

///bai7 tìm x và y khi biết tổng và hiệu
// let tong = parseFloat(prompt("Nhập tổng"));
// let hieu = parseFloat(prompt("Nhập hiệu"));
// let x = (tong + hieu) / 2;
// let y = (tong - hieu) / 2;
// console.log("x = " + x);
// console.log("y = " + y);

// bai8 viết chương trình nhập chiều cao, cân nặng. Tính BMI
let chieucao = parseFloat(prompt("Nhập chiều cao (m)"));
let cannang = parseFloat(prompt("Nhập cân nặng (kg)"));
let bmi = cannang / (chieucao * chieucao);
console.log("Chỉ số BMI = " + bmi);
if (bmi < 15) {
    console.log("Thân hình quá gầy")
} else if (bmi >= 15 && bmi < 16) {
    console.log("Thân hình gầy")
} else if (bmi >= 16 && bmi < 18.5) {
    console.log("Thân hình hơi gầy")
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Thân hình bình thường")
} else if (bmi >= 25 && bmi < 30) {
    console.log("Thân hình hơi béo")
} else if (bmi >= 30 && bmi < 35) {
    console.log("Thân hình béo")
} if (bmi >= 35) {
    console.log("Thân hình quá béo")
}

//bai9 viết chương trình nhập vào 1 năm dương lịch, kiểm tra năm đó có phải năm nhuận hay không
// let nam = parseInt(prompt("Nhập năm dương lịch"));
// if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
//     console.log(nam + " là năm nhuận");
// } else {
//     console.log(nam + " không phải là năm nhuận");
// }
//bai10 viết chương trình nhập vào 1 tháng bất kì xem thử tháng đó có bao nhiêu ngày
// let thang = parseInt(prompt("Nhập tháng (1-12)"));
// if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
//     console.log("Tháng " + thang + " có 31 ngày");
// } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
//     console.log("Tháng " + thang + " có 30 ngày");
// } else if (thang == 2) {
//     let nam2 = parseInt(prompt("Nhập năm dương lịch"));
//     if ((nam2 % 4 == 0 && nam2 % 100 != 0) || (nam2 % 400 == 0)) {
//         console.log("Tháng " + thang + " có 29 ngày");
//     } else {
//         console.log("Tháng " + thang + " có 28 ngày");
//     }   
// } else {
//     console.log("Tháng không hợp lệ");
// }

//bai11 viết chương trình giải phương trình bậc 2
// let a = parseFloat(prompt("Nhập hệ số a"));
// let b = parseFloat(prompt("Nhập hệ số b"));
// let c = parseFloat(prompt("Nhập hệ số c"));
// let delta = b * b - 4 * a * c;
// if (a == 0) {
//     if (b == 0) {
//         if (c == 0) {
//             console.log("Phương trình vô số nghiệm");
//         } else {
//             console.log("Phương trình vô nghiệm");
//         }
//     } else {
//         let x = -c / b;
//         console.log("Phương trình có nghiệm x = " + x);
//     }
// } else {
//     if (delta < 0) {
//         console.log("Phương trình vô nghiệm");
//     } else if (delta == 0) {
//         let x = -b / (2 * a);
//         console.log("Phương trình có nghiệm kép x = " + x);
//     } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         console.log("Phương trình có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
//     }
// }

//bai12 viết chương trình nhập vào tháng trong năm xem tháng đó có quý mấy
// let thang = parseInt(prompt("Nhập tháng (1-12)"));
// if (thang >= 1 && thang <= 3) {
//     console.log("Tháng " + thang + " thuộc quý 1");
// } else if (thang >= 4 && thang <= 6) {
//     console.log("Tháng " + thang + " thuộc quý 2");
// }   else if (thang >= 7 && thang <= 9) {
//     console.log("Tháng " + thang + " thuộc quý 3");
// } else if (thang >= 10 && thang <= 12) {
//     console.log("Tháng " + thang + " thuộc quý 4");
// } else {
//     console.log("Tháng không hợp lệ");
// }