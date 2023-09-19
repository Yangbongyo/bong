// for.js
// for문 -- 일정 횟수만큼 반복하기 위하여 사용
console.log('for문 연습')

// for(초기화 변수, 조건, 증감)
// i = index번호
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// 중첨한 사례
// for(let i = 0; i < 10; i++){
//     console.log(i)
//     for(let j = 0; j < 2; j++){
//         console.log(`j번째 : ${j}`)
//     }
// }

// const pokemon = ['피카츄', '라이츄', '이브이', '파이리', '꼬북이']
// // let i = pakamon    ---- 근거없는 변수
// for(i = 0; i < pokemon.length; i++){
//     console.log(pokemon[i])
// }


// 구구단
/*
const multi = [1, 2, 3, 4,5, 6, 7, 8 ,9]
for(i = 0; i < 9; i++){
    console.log(multi[i] + '단')
    for(j = 0; j < 9; j++){
        console.log(`${multi[i]} * ${multi[j]} = ${multi[i] * multi[j]}`)
    }
}
*/

// %c -- style을 추가할 수 있는 기능 `백틱`, 스타일
// 스타일을 변수로 지정해서 활용할 수 있다
let style ='background-color: red; color: white; font-weight: bold; padding: 5px;'
for(let i = 1; i <= 9; i++){
    console.log(`%c${i}단`, style)
    for(let j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

let star ='';

for(i = 0; i < 5; i++){
    star += "*";
    console.log(star)
}