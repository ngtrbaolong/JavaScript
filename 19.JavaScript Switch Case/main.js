//19. switch case js
let number = 2;
switch (number % 2){
    case 0:
        console.log("số chẳn");
        break;
    case 1:
        console.log("số lẻ");
        break;
        default:
            console.log("không phải số");
}
// switch case biến thể
let month = parseInt(prompt("nhập tháng"));
switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("tháng có 31 ngày");
        break;
    case 4: case 6: case 9: case 11:
        console.log("tháng có 30 ngày");
        break;
    case 2:
        console.log("tháng có 28 hoặc 29 ngày");
        break;
    default:
        console.log("không phải tháng");
}
// bai14 viết chương trình khung tìm kiếm: cho người dùng nhập vào lựa chọn

let choice = parseInt(prompt(`
    Chọn cách tìm kiếm:
    1. Tìm kiếm theo tên
    2. Tìm kiếm theo tác giả
    3. Tìm kiếm theo nhà xuất bản
    4. Tìm theo tiêu đề
    Thoát nếu phím bấm không hợp lệ`));
switch (choice){
    case 1:
        alert("tìm kiếm theo tên");
        break;
    case 2:
        alert("tìm kiếm theo tác giả");
        break;
    case 3:
        alert("tìm kiếm theo nhà xuất bản");
        break;
    case 4:
        alert("tìm theo tiêu đề");
        break;
    default:
        alert("thoát");
}