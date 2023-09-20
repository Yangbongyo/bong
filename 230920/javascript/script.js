

//  매개변수가 하나일때, 화살표 함수를 축약해서 표현
/*
cont double = (x){
    return console.log(x * x)
}
*/

// if문 (""로 묶지 않으면 변수로 인식한다)


// 축약 표현식
const double = x => console.log(x * x);

// 매개변수를 제곱하는 함수
double(4)

/*
const showName = (name) =>{
    return console.log(`제 이름은 ${name}입니다`)
}
showName('이름')
*/

// const showName = name => console.log(`제 이름은 ${name}입니다`); showName('이름')


function showName(name){
    // 매개변수 name의 타입이 'string'일 경우에만 출력
    if(typeof name === "string"){
        return console.log(`이름은 ${name}`);
    }
    console.log(`매개변수의 타입은 ${typeof name}입니다`)
    // return 문 아래에 작성된 내용은 실행되지 않는다
}
showName("이름");

/*
function cal(n){
    let sum = 0
    for(let i = 0; i <= n; i++){
        sum += i
    }
    console.log(`${sum}`)
}
cal(10)
*/

