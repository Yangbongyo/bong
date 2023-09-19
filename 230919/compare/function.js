// function.js
// console.log('function')

/**
 * add라는 이름의 함수
 * x와, y라는 값을 받아서 더하는 함수
 * x, y : 매개변수, parameter
 */

// 표현식-1
// function add(x, y){
//     return x + y;     
// }
// console.log('덧셈 결과는' + add(2, 5))

function add(x, y){
    return console.log('덧셈 결과는' + x + y)     
}
    add(2, 5)

// 표현식-2
function multiply(x, y){
    add(x, y)                   // 문자열로 인식 ${}로 표기하면 됨
    return console.log('곱셈 결과는' + x * y)
}
    multiply(4, 6)

// 표션식 3 (fat arrow function, 화살표 함수)
const addFunc = (x, y) => {
    return console.log(x + y)
}
    addFunc(10, 20)

const userName = (name) => {
    return console.log(`나의 이름은 ${name}입니다`)
}
    userName('이름')

// 표현식 4
const age = age => console.log(`제 나이는 ${age}입니다`)
age('...')