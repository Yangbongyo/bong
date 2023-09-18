
/**
 * 변수
 * var, let, const
 */
// 주로 사용되는 것은 ES6부터 추가된 let, const

// let dog;

// 변수를 선언할때 주의점
// 이름이 중복되면 안된다 (스코프, Scope가 달라야 한다)
// 변수에 숫자로 시작하면 안된다 (ex. 1dog)
// 연산자를 붙여서는 안된다 (+, * 등)
// $, underscore(밑줄)은 허용이 됨
// let dog1;
// let $dog;
// let _dog;
// console.log(dog1, $dog, _dog);

// // 변수에 값을 할당하는 방법
// let cat = '고양이';
// console.log(cat);

// 변수명 설정 방법
// snake_case(밑줄(underscore) 활용)   -- this_is_user
// kebab-case (-)는 사용하지 못한다
// camelCase (두번째 단어의 첫글자를 대문자로) -- userName
// PascalCase 모든 단어의 첫글자를 대문자로  -- UserName

// let dogName = '삼용이';
// dogName = '영철이';
// console.log(dogName);   // '영철이'
// dogName = '춘향이';
// console.log(dogName);    // '춘향이'

// 고양이 : 보름이, 반달이, 밤이
// const catName = '보름이';
// const는 상수이므로 값을 바꿀수 없다
// catName = '밤이'
// console.log(catName);


// js test
// let value = prompt('이름을 입력해 주세요');
// console.log(value);

const userName = document.getElementById('username');

console.log(userName);
let value = prompt('이름을 입력해 주세요');
userName.textContent = value;
let color = prompt('원하는 컬러');
userName.style.color = color;
let fontsize = prompt('글자 크기...');
userName.style.fontSize = `${fontsize}px`;
// console.let(value);
