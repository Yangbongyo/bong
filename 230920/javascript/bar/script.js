/**
 * #number : 변해야할 숫자
 * #inc : 증가버튼
 * #dex : 감소버튼
 */

const num = document.querySelector("#number")
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
const bar = document.querySelector(".bar")

console.log(bar)

// num.innerHTML = '3...........................'

// 증감할 값이 들어있는 변수
let counter = 0;

// inc : increment(증가)하는 일
// inc.addEventListener("click", function(){})
inc.addEventListener("click", () => {
    // counter가 100을 넘으면 정지 -- 100까지만 진행한다
    if(counter < 100){
        counter += 10;
        num.textContent = `${counter}`
        bar.style.width = `${counter}%`
    }
    // bar.style.maxWidth = '100%'
    console.log(counter)
   
})

// dec : decrement(감소)하는일
dec.addEventListener("click", () => {
    if(counter > 0){
        // counter = counter - 1;
        counter -= 10;   
        num.textContent = `${counter}`
        // dec.style.transform = `rotate(${counter}deg)`
        bar.style.width = `${counter}%`
    }
    console.log(counter)
})

