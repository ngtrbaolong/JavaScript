//Đề bài: 
//  Bài tập js 24:
// Nhập vào 1 chuỗi từ bàn phím , 
// đếm xem có bao nhiêu ký tự thường
//  bao nhiêu in hoa
//  bao nhiêu số
//  bao nhiêu space
/*
let inputString = prompt("Nhập vào một chuỗi:");
let lowerCaseCount = 0;
let upperCaseCount = 0;
let numberCount = 0;
let spaceCount = 0;
for (let i = 0; i < inputString.length; i++) {
    let char = inputString.charAt(i);
    if (char >= 'a' && char <= 'z') {
        lowerCaseCount++;
    } else if (char >= 'A' && char <= 'Z') {
        upperCaseCount++;
    } else if (char >= '0' && char <= '9') {
        numberCount++;
    } else if (char === ' ') {
        spaceCount++;
    }
}
console.log("Số ký tự thường: " + lowerCaseCount);
console.log("Số ký tự in hoa: " + upperCaseCount);
console.log("Số ký tự số: " + numberCount);
console.log("Số ký tự space: " + spaceCount);
*/
//  Bài tập js 25:
// a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu: 
//    1.  mật khẩu hợp lệ khi có ít nhất 6 ký tự 
//    2. chứa ít nhất 1 chữ cái viết hoa
//    3. chứa ít nhất 1 chữ cái viết thường
//    4. chứa ít nhất 1 chữ số 
//  b.  Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở của, sai quá  5 lần khóa đăng nhập, thoát chương trình    
// // Ví dụ mật khẩu hợp lệ : Abc123
/*
let password = prompt("Nhập mật khẩu để thiết lập:");
while (true) {
    if (password.length < 6) {
        console.log("Mật khẩu phải có ít nhất 6 ký tự.");
        password = prompt("Nhập lại mật khẩu:");
        continue;
    }
    if (!/[A-Z]/.test(password)) {
        console.log("Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa.");
        password = prompt("Nhập lại mật khẩu:");
        continue;
    }
    if (!/[a-z]/.test(password)) {
        console.log("Mật khẩu phải chứa ít nhất 1 chữ cái viết thường.");
        password = prompt("Nhập lại mật khẩu:");
        continue;
    }
    if (!/[0-9]/.test(password)) {
        console.log("Mật khẩu phải chứa ít nhất 1 chữ số.");
        password = prompt("Nhập lại mật khẩu:");
        continue;
    }
    console.log("Mật khẩu hợp lệ!");
    break;
}

let attempts = 0;
const maxAttempts = 5;
while (attempts < maxAttempts) {
    let userInput = prompt("Nhập mật khẩu:");
    if (userInput === password) {
        console.log("Mở cửa thành công!");
        break;  
    } else {
        attempts++;
        console.log("Mật khẩu sai! Bạn còn " + (maxAttempts - attempts) + " lần thử.");
        if (attempts === maxAttempts) {
            console.log("Tài khoản bị khóa do nhập sai quá nhiều lần.");
        }
    }
}
*/
//  Bài tập js 26:
// Viết chương trình chuyển tin nhắn sang mật mã theo bảng :  
//  const a="abcdefghijklmnopqrstuvwxyz"   
//  const b="zxcvbnmasdfghjklqwertyuiop" 

function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); // Chuyển đổi thành chữ thường để phù hợp với bảng mã

    // Kiểm tra xem ký tự nhập vào có trong bảng mã hay không
    if (a.includes(char)) {
      // Thực hiện chuyển đổi
      // Kiểm tra vị trí index ký tự nhập vào trong a
      let index = a.indexOf(char);
      // Lấy giá trị index, dóng sang chuỗi b để lấy ký tự tương ứng trên b
      result += b[index];
    }
    // Nếu không có trong bảng mã, thì giữ nguyên ký tự và dồn vào biến result
    else {
      result += char; //result = result +char
    }
  }

  return result;
}

// Cho người dùng nhập liệu
let messageInput = prompt("Nhập tin nhắn cần mã hoá:");
let kq = encryptMessage(messageInput);

alert(`Tin nhắn được mã hoá: ${kq}`);
//   Bài tập js 27: 
//       const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
//       Đếm từ tôi trong string a trên ? 
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
const targerWord = "tôi";
let count = 0;

for (let i = 0; i < a.length; i++) {
    if (a.slice(i, i + targerWord.length) === targerWord) {
        count++;
    }
}
alert (`So lần xuất hiện của từ "${targerWord}" là: ${count}`);
//  Bài tập js 28:
//  Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :  
// ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
function separate(inputString) {
  let letters = "";
  let numbers = "";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if (isNaN(char)) {
      // Nếu ký tự char không phải số, thêm vào chuỗi letters
      letters += char;
    } else {
      // Nối ký tự char vào chuỗi numbers
      numbers += char;
    }
  }
  return {letters, numbers};
}

let inputString = prompt("Mời nhập chuỗi:");
let result = separate(inputString);

alert(`
Chuỗi chữ: ${result.letters}
Chuỗi số: ${result.numbers}
`);