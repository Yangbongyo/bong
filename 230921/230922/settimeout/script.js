// setTimeOut - 시간을 지연시켜 실행되는 함수
// 배너, 원고 중간에 생성되는 영상

// setTimeout(함수, 시간: ms)

// setTimeout(() => {
//     console.log('1번째')
// }, 1000)
// setTimeout(() => {
//     console.log('2번째')
// }, 3000)
// setTimeout(() => {
//     console.log('3번째')
// }, 500)

// setInterval - 정해진 시간마다 반복 실행하는 비동기 함수
// setInterval(함수, 시간)
// setInterval(() => {
//     console.log(`나는${1000} 반복됩니다`)
// }, 1000)

let index = 0;
// 1초 뒤에 index값을 1로 변경해서 console로 출력
// setTimeout(() => {
//     index++
//     console.log(index)
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'gray' 
// }, 1000)

setInterval(() => {
    // 1초마다 index가 증가하도록 처리. 콘솔 출력
    // console.log('나는 1000ms마다 반복됩니다')
    // index++
    // console.log(`나는 ${index}초 마다 반복됩니다`)
}, 1000)