console.log('연산자');

let value = 1 + 2;
value = 1 + Number('1');  // 형변환 적용
value = 10 - '강아지';  // NaN : Not a Number , 숫자형이 아닌 것을 계산할때 애러
value = 10 * 10  // 100
value = 5 % 3  // 2 , 나머지 연산자
console.log(value, typeof value);

let x = 5;
console.log(x + true);   // true = 1값을 출력
console.log(x - false);  // false = 0값을 출력 , null = 0
// 이미테이션 게임 영화의 0, 1 참조

let pokemon;
let name = '피카츄';
let age = 28;
pokemon = "안녕 나는" + name + "야, 나이는" + age + "살이야";
console.log(pokemon);

// let message;
// let userName = '양봉요';
// // message = "나는" + userName + "입니다.";
// message = `나는 ${userName} 입니다`;  // 변수 선언과 관계없이 값이 출력됨
// console.log(message)

// userName님의 이메일 주소는 userEmail, 거주지는 userPlace 입니다.
let userInfor;
let userEmail = "comnuly@naver.com";
let userPlace = "대전";
let userAge = 40;
// message = "나의 이메일 주소는 " + userEmail + "이고 " + "나의 거주지는 " + userPlace + "입니다.";
// 템플렛 리터럴 방식 (변수에 조건을 부여할 수 있다)
userInfor = `나의 이메일 주소는 ${userEmail}이고, 사용자의 나이는${userAge + 2}, 거주지는 ${userPlace} 입니다`;
console.log(userInfor);

// 길이, 갯수를 알아보는 속성 (length)
// let text = 'hello world';
// console.log(text.length)
// toUpperCase   // 대문자로 변환
// toLowerCase    // 소문자로 변환

let num = 1;
num = num + 1;   // num = 2
num += 1;    // num = num + 1
num *= 1;    // num = num * 1
num /= 1;    // num = num / 1
num %= 1;    // num = num % 1
console.log(num);

let a = 1;
let b = a++;
console.log(a, b);