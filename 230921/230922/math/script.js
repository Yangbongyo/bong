console.log('run')

// PI
// 절대값
console.log(Math.abs(-1))
console.log(Math.abs(1))
console.log(Math.abs('-1'))

// 반올림
console.log(Math.round(1.4))
console.log(Math.round(1.5))

// 올림
console.log(Math.ceil(1.2))

// 버림
console.log(Math.floor(1.8848))

// random : 0 ~ 0.999...
console.log(Math.random())
// Math.random() * (최대값 - 최소값 + 1) + 최소값;
console.log()
let max = 45;
let min = 1;
// const random = Math. random() * (45 - 1 + 1) + 1;
// console.log(Math.floor(random))
const random = Math.floor(Math. random() * (45 - 1 + 1) + 1);
console.log(random)

const randomGenerator = (min, max) => {
    return console.log(Math.floor(Math. random() * (max - min + 1) + 1))
}
randomGenerator(1, 45)