//29.4 concat(), toUpperCase(), toLowerCase(), charAt()
// concat(): Nối chuỗi
//let newString = string1.concat(string2, string3, ..., stringN);
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

//toUpperCase() : chuyển toàn bộ sang viết hoa
let s18 = "Chào các bạn, tôi hỌC TẠI Tuhoc.cc";
console.log(s18.toUpperCase());

//toLowerCase() chuyển toàn bộ chuỗi sang viết thường
console.log(s18.toLowerCase());

//charAt(index)
//-> Trả về chuỗi nằm ở vị trí index được truyền vào
//string.charAt(index);
let s19 = "Hello";
console.log(s19.charAt(4));