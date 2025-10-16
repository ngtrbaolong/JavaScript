let currentDate = new Date();
console.log(currentDate);

//
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log ("Năm hiện tại: " + year);
console.log ("Tháng hiện tại: " + month);
console.log ("Ngày hiện tại: " + day);
console.log ("Giờ hiện tại: " + hours);
console.log ("Phút hiện tại: " + minutes);
console.log ("Giây hiện tại: " + seconds);

//Timestamp
const timestamp1 = new Date(0);
console.log(timestamp1);  
// sử dụng getTime();  để lấy timestamp hiện tại
let currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);
