
//11. toán tử logic
let i = 7;
// kiểm tra xem i >0 và i < 10 không?
console.log(i > 0 && i < 10); //true
// kiểm tra i<0 hoặc i<10 không?
console.log(i > 0 || i < 10); //true
// phủ định
console.log(!(i > 0 || i < 10)); //false
// -----------------------------------------------bài toán hình tròn
// Yêu cầu người dùng nhập bán kính từ bàn phím
let r = Number(prompt("Nhập bán kính của đường tròn:"));
console.log(r);
console.log(typeof r);

// Tính chu vi và diện tích
let PI = Math.PI;
let chuVi = 2 * 3.14 * r;
let dienTich = 3.14 * r * r;

// in kết quả
console.log("Chu vi = " + chuVi);
console.log("Diện tích = " + dienTich);
// -----------------------------------------------bài toán hình chữ nhật
// Yêu cầu người dùng nhập chiều dài và chiều rộng từ bàn phím
let a = Number(prompt("Nhập chiều dài hình chữ nhật:"));
let b = Number(prompt("Nhập chiều rộng hình chữ nhật:"));

// Tính chu vi và diện tích
let chuVi = (a + b) * 2;
let dienTich = a * b;

// In kết quả
console.log("Chu vi = " + chuVi);
console.log("Diện tích = " + dienTich);
// -----------------------------------------------bài toán tính điểm trung bình
// Yêu cầu người dùng nhập điểm từ bàn phím
let diemToan = Number(prompt("Nhập điểm môn toán:"));
let diemVan = Number(prompt("Nhập điểm môn văn:"));
let diemAnh = Number(prompt("Nhập điểm môn anh:"));

// Tính điểm trung bình
let dtb = (diemAnh + diemToan + diemVan) / 3;

console.log("Điểm trung bình = " + dtb.toFixed(2));