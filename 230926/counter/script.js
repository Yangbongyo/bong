
const dataList = document.querySelectorAll('[data-counter')

console.log(dataList)

/*
// 반목문을 이용해서 dataList안에 있는 data-counter 값을 출력
// html : data-counter , js : element.dataset.counter
for (let i = 0; i < dataList.length; i++) {
    const target = dataList[i].dataset.counter
    const timerText = dataList[i].querySelector('.timer')
    // target / 200 : 소숫점 발생 --- Math.floor (소숫점 제거)
    const step = Math.floor(target / 200);   // 증감의 형태를 변경해 주는 역할
    let index = 0;
    if(timerText){
    setInterval(() => {
        if (index < target) {
            index = index + step
            timerText.textContent = index
        }
    }, 100)
}
}  
*/

// forEach 방식으로 변경
dataList.forEach(item => {
    const target = item.dataset.counter   // dataList -> item으로 변경
    const timerText = item.querySelector('.timer')
    const step = Math.floor(target / 200);
    let index = 0;
    setInterval(() => {
        if(index < target){
            index = index + step
            timerText.textContent = index
        }
    }, 100)
})
