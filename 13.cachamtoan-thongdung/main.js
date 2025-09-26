// 1. Hàm 'Marth.sqrt()'
let soA= 25;
let soB= Math.sqrt(soA);
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

// 2. Hàm 'Math.pow(base, exponent)'
let soC= 5;
let soD= 2;
let result = Math.pow(soC, soD);
console.log(`${soC} mũ ${soD} là: ${result}`);

// 3. Hàm 'Math.abs()'
let soE= -10;
let absoluteValue = Math.abs(soE);
console.log(`Giá trị tuyệt đối của ${soE} là: ${absoluteValue}`);

// 4. Hàm 'Math.ceil()' và 'Math.floor()'
let soF= 4.3;
let ceilValue = Math.ceil(soF);
let floorValue = Math.floor(soF);
console.log(`Làm tròn lên của ${soF} là: ${ceilValue}`, `Làm tròn xuống của ${soF} là: ${floorValue}`);

// 5. Hàm `Math.round()`, từ 0.5 làm tròn thành 1
let soG= 4.49;
let roundedValue = Math.round(soG);
console.log(`Làm tròn của ${soG} là: ${roundedValue}`);

//6. làm tròn X chữ số hàng đơn vị
let soH= 4.56789;
let soHRound= soH.toFixed(2);
console.log(`Làm tròn ${soH} đến 2 chữ số thập phân là: ${soHRound}`);
//lưu ý toFixed sẻ trả về kiểu string
console.log (`kiểu dữ liệu của soHRound: ${typeof soHRound}`);
//nếu muốn chuyển về kiểu number
soHRound= parseFloat(soHRound);
console.log (`kiểu dữ liệu của soHRound sau khi chuyển về number: ${typeof soHRound}`);
console.log (`kiểu dữ liệu của soHRound sau khi chuyển về number: ${soHRound}`);

// 7. Hàm 'Math.max()' và 'Math.min()'
let num1 = 10;
let num2 = 5;
let num3 = 20;
let maxValue = Math.max(num1, num2, num3);
let minValue = Math.min(num1, num2, num3);
console.log(`Giá trị lớn nhất trong (${num1}, ${num2}, ${num3}) là: ${maxValue}`, `Giá trị nhỏ nhất trong (${num1}, ${num2}, ${num3}) là: ${minValue}`);