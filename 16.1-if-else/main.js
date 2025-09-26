let dtb = parseFloat(prompt("Nhập điểm trung bình"));
if (dtb >= 5 && dtb <= 6.5) {
    console.log("Trung bình");
} else if (dtb > 6.5 && dtb <= 7.5) {
    console.log("Khá");
} else if (dtb > 7.5 && dtb <= 9) {
    console.log("Giỏi");
} else if (dtb > 9 && dtb <= 10) {
    console.log("Xuất sắc");
} else {
    console.log("Yếu");
}

