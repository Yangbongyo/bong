console.log('types');

let value = 5;
value = '5'
value = true;   // boolean : 참 
value = false;   // boolean : 거짓
// 변수명 앞에 typeof = 타입유형을 알려주는 기능
console.log(value, typeof value);   

// 형변환
// '5개'라는 문자열에서 '개'를 지우고 '5'를 숫자형으로 변환할 때
// let number = '5';
// number = parseInt(number);
// number = +number;  // 숫자일 경우 (+)로 강제 형변환
// console.log(number, typeof number);

// let number2 = '8.5';
// number2 = parseFloat(number2);
// console.log(number2, typeof number2);

// 숫자를 문자료 형변황
let string = 100;
string = '100';
string = String(string)  // String으로 형변환
console.log(string, typeof string);

