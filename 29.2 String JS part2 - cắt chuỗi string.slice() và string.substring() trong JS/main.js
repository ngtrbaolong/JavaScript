// cắt chuỗi trong JS với slice và substring
// slice cắt chuỗi
let s1 = "23456789"
let s2 = s1.slice(2, 9);
console.log (s2); // 456789
console.log (s1.length);
// ví dụ: chỉ cho phép tin nhắn dài tối đa 20 ký tự,
// nếu quá thì tự cắt xuất chuỗi sau xử lý
let s3 = prompt("Nhập vào chuỗi");
console.log (`Bạn đã nhập ${s3.length} ký tự`);
if (s3.length > 20){
    console.log (`Bạn đã nhập quá ${s3.length - 20} ký tự quá dài, chúng tôi sẽ tự cắt bớt`);
    let s4 = s3.slice(0, 20);
    console.log (`chuỗi sau xử lí là: ${s4}`);
}
// So sánh slice() và substring()
/*
Đối số truyền vào  : 	
substring(start, end): Nhận vào hai tham số là vị trí bắt đầu và kết thúc trích xuất. Nếu end < start, chúng sẽ được đảo ngược      
slice(start, end): Cũng nhận vào hai tham số là vị trí bắt đầu và kết thúc trích xuất. Nếu end < start, chuỗi sẽ được xem như rỗng.
*/
let s10 = "0123456789";
console.log("Sử dụng substring");
console.log(s10.substring(1, 4)); //123
console.log(s10.substring(4, 1)); //123
console.log("Sử dụng slice");
console.log(s10.slice(1, 4)); //123
console.log(s10.slice(4, 1)); //""
// "" (chuỗi rỗng, không đảo ngược vị trí start và end)

//Khác nhau khi Xử lý với số âm:
/*
substring(start, end): 
substring sẽ chuyển số âm thành 0 và 
nếu end < start sau khi chuyển số âm thì nó sẽ đảo ngược chúng.
*/
let s11 = "0123456789";
console.log("Sử dụng substring với tham số âm");
console.log(s11.substring(-3, -1));
//s11.substring(-3, -1) -> s11.substring(0, 0) -> ""
// TH2: substring nếu end < start đảo ngược vị trí start và end)
console.log("Trường hợp substring có 1 tham số âm, end <start");
console.log(s11.substring(4, -5));
//s11.substring(4, -5) --> s11.substring(4, 0) --> s11.substring(0, 4)

console.log("Sử dụng slice với tham số âm");
console.log(s11.slice(-3, -1)); //cắt từ -3 đến -2
// 78 do: lấy từ index -3 đến sát -1 (tức là -2)