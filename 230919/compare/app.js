// app.js

// getElement는 아이디, 클래스 구분된 명칭으로 되어서 # 또는 . 을 사용안함
// const title = document.getElementById('title')
// const title = document.querySelector("#title")
// console.log(title)

// const title = document.querySelector(".title")
// console.log(title)

const title = document.querySelectorAll(".title")
// console.log(title[2])

// for(let i = 0; i < title.length; i++){
//     console.log(title[i])
// }


for(let i = 0; i < title.length; i++){
    title[i].textContent = `${i}번째 요소입니다`
    // title[i].style.fontSize = '20px'
    // title[i].style.fontWeight = '400'
    title[i].classList.add('red')
    // if(i === 0){
    //     // title[i].style.color = 'red'
    //     // title[i].classList.add('red')
    //     title[i].classList.remove('red')
    // }

    if(i === title.length - 1){
        title[i].classList.remove('red')
    }

    // 배열의 마지막 요소 속성(클래스) 삭제
    //    title[title.length - 1].classList.remove('red')
}