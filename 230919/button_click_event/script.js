const title = document.getElementById('title')

console.log(title)

// 제목을 클릭했을때, alert 창에 '클릭'이라는 문구 출력
/*
title.addEventListener("click", function(){
    alert('클릭')
})
*/

title.addEventListener("click", () =>{
    // alert('클릭한 내용')
    // title.style.color = 'red';
    if(title.style.color === 'red'){
        title.style.color = 'black';
    }else{
        title.style.color = 'red';
    }
})

// button 가져와서 변수에 담는다
// container 가져와서 변수에 담는다
// button 클릭했을때 container에 bg 클래스 추가된다

const button = document.querySelector("#btn");
// All 일 경우 - console창에서 배열
// const cont = document.querySelectorAll(".container");
const cont = document.querySelector(".container");

button.addEventListener("click", () => {
    cont.classList.add('bg');
    let bg = document.querySelector(".bg")
    bg.style.backgroundColor = 'rgb(7, 69, 163)'
    
})
