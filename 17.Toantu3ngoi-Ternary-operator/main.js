//17 toán tử 3 ngôi
let number = -10;
let message = number >=0 ? "Số dương" : "Số âm";
console.log(message);

let number2 = 11;
let massage2 = number2 % 2 == 0 ? "Số chẵn" : "Số lẻ";
console.log(massage2);
// baitap13 viết chương trình nhập vào điểm trung bình, và xuất ra kết quả xếp loại học sinh theo tiêu chuẩn sau
let dtb = parseFloat(prompt("Nhập điểm trung bình: "));``
let xeploai = dtb >= 8 ? "Giỏi" : (dtb >= 6.5 ? "Khá" : (dtb >= 5 ? "Trung bình" : "Yếu"));
console.log(`Học sinh xếp loại: ${xeploai}`);   