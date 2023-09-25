console.log('test')
const dot = document.querySelector(".dot")
// console.log(dot)

const randomGenerator = (min, max) => {
    return Math.random();
} 
// clientX , clientY 좌표를 활용
window.addEventListener('mousemove', (event) =>{
    console.log(`X 좌표: ${event.clientX}`)
    console.log(`Y 좌표: ${event.clientY}`)
    // dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px';
    // dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px';
    console.log(`dot의 width : ${dot.clientWidth / 2}`)
    console.log(`dot의 height : ${dot.clientHeight}`)
    // 마우스이벤트가 부드럽게 적용된다
    // requestAnimationFrame
    requestAnimationFrame(() => {
        mouseMove(event)
    })
    
 })

//  클래스에서 마우스이벤트가 느려지는 현상을 보완하는 함수 추가
 const mouseMove = (event) => {
    // event 밑줄이 그어지는 현상 (매개변수를 넣어야 함)
    dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px';
    dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px';
 }

// 화면에 클릭하면 새로 만들어진 클래스를 추가해서 적용된다(append)
// bubble 변수를 event 밖에 설정했을때는 클릭한 정보가 생성되지 않는다
// 내부에 있을때 클릭이 남게 되므로 setTimeout으로 정보를 해당 초에 삭제됨
window.addEventListener('click', () => {
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    setTimeout(() => {
        bubble.remove();
    }, 5000)
    
    
})

