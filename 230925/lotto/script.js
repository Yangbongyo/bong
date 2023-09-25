// rotto  
// push
console.log('run')

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// console.log(randomNumber(1, 45))

let lottoNumber = [];  // 6

lottoNumber.push(randomNumber(1, 45))

// 실행초기(중복 숫자 생김)
// for(let i = 0; i < 6; i++){
//     lottoNumber.push(randomNumber(1, 45))
//     console.log(lottoNumber)
// }

const result = document.querySelector("#result")
const button = document.getElementById('generate')
const list = document.querySelectorAll("#result li")
button.addEventListener("click", () => {
    // 버튼 클릭후 전체 생성되기 전에 클릭을 못하게 하는 요소 (클래스 추가)
    button.classList.add('processing')
    button.textContent = '번호 생성중'
    // 넘버가 0보다 크면 초기화 - 1회만 클릭되는 문제해결방법
    if(lottoNumber.length > 0){
        // 숫자를 비워준다
        lottoNumber = []
    }
for(let i = 0; lottoNumber.length < 6; i++){
// 6개의 숫자를 랜덤 생성 (중복 문자 해소)

    // rnadom 변수에 난수 생성한 값 할당
    const random = randomNumber(1, 45)
    // isEntry : lottoNumber의 출력값에 중복이 있는지 확인
    const isEntry = lottoNumber.includes(random)

    // console.log(isEntry)
    // lottoNumber.push(randomNumber(1, 45))
    // isEntry - 중복수가 있는가 (true / false)
    // false일때 push하여라
    if(!isEntry){
        lottoNumber.push(random)
        // 배열에 요소를 추가
        console.log(lottoNumber) 
        // list[i].textContent = lottoNumber[i]  // 아래의 for문도 가능 (중목 숫자 발생시 출력안됨)
    }  
} 

    // 오름차순 정렬
    // lottoNumber = lottoNumber.sort()
    lottoNumber = lottoNumber.sort((a, b) => a - b)
// scopr가 다르므로 변수 선언 문자를 동일하게 사용 가능 (i)
for(let j = 0; j < list.length; j++){
    // 순차적으로 나타나게 표현하는 식 (setTimeout)
    setTimeout(() => {    
    list[j].textContent = `${lottoNumber[j]}`  //`${lottoNumber[j]}` => lottoNumber[j]
    }, 200 * j)
}
 let timer = 200;  // 숫자 생성되는 시간을 변수로 지정
 // 버튼 클릭후 재생성 시간 설정 (클래스 삭제)
 setTimeout(() => {
    button.classList.remove('processing')
    button.textContent = '번호 생성중'
}, timer * lottoNumber.length)
})



