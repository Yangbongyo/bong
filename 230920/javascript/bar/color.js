// color.js 색상변환
console.log('color')

/**
 * .color : 색깔이 반영되는 곳
 * .plus : 수치를 증가시키는 버튼
 * .minus : 수치를 감소시키는 버튼
 * .hue : 반영된 수치가 나타나는 곳 (범위: 0~360)
 */

const color = document.querySelector(".color");
const wrapper = document.getElementsByClassName('btn-wrapper');
const plus = document.querySelector(".plus");
const minus = document.querySelector('.minus');
const hue = document.querySelector(".hue")
console.log('color', 'wrapper', 'plus', 'minus')

let value = 0;

const changeHue = (param) => {
    hue.textContent = param;
    color.style.backgroundColor = `hsl(${param}, ${param + 45}%, 33%)`
}

plus.addEventListener("click", () => {
    if (value < 360) {
        value += 10
        changeHue(value)
    }
})
    

minus.addEventListener("click", () => {
    if (value > 0) {
        value -= 10
        // hue.textContent = `${value}`
        // color.style.backgroundColor = `hsl(${value}, ${value + 45}%, 33%)`
        changeHue(value)
    }
    console.log(value)
})