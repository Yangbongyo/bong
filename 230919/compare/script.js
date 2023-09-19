let value = 10;

if(value > 10){
    console.log("value는 10보다 큽니다")
}
else if(value == 10){
    console.log(`${value}는 10과 같습니다`)
}

// if(typeof value === 'string'){
//     console.log('문자형입니다')
// }else if(typeof value ==='number'){
//     console.log('숫자형입니다')
// }

let money = 8000;

if(money < 9000){
    console.log('자장면을 먹을수 있습니다')
}else{
    console.log('짬뽕을 먹을수 있습니다')
}

// 3항 연산자 ( 연산 ? 참 : 거짓)
money < 9000 ? console.log('짜장면') : console.log('짬뽕')