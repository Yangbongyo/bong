console.log('ddd')
/**
 * #counter : 숫자가 변해야할 곳
 * #start : 숫자가 증가하도록 작동하는 버튼
 * #stop : 숫자 증가를 멈추는 버튼
 */

/**
 * setInterval
 * clearInterval
 */

const counter = document.getElementById('counter')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let index = 0;
let timerId;
let reset = 0;


// timerId를 클릭하면 시작 - 정지 - 시작 -정지로 진행
// 시작을 계속 누르고 정지를 누르면 기능이 적용안됨
// 시작 버튼에 0번의 번호로 시작해서 0번이 정지되는데 계속 누르면 아이디가 계속 생성됨
// 해결방법 : 시작 함수 취소 if문으로 Id 초기황
startBtn.addEventListener("click", () => {
    // 만약 timerId에 값이 들어있다면 비우기
    if(timerId){
        clearInterval(timerId)
    }

    // 비어있는 timerId에 setInterval 함수 할당
    timerId = setInterval(() => {
        index ++
        counter.textContent = index
        
    }, 100)
})
stopBtn.addEventListener("click", () => {
    clearInterval(timerId)
})

resetBtn.addEventListener("click", () => {
    counter.textContent = reset
    clearInterval(timerId)
})
