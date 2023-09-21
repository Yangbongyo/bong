const data = [
    {title: '커피', url: '../../images/coffee01.jpg'},
    {title: '동물', url: '../../images/animal02.jpg'},
    {title: '오름', url: '../../images/orum_01.jpg'},
    {title: '사람', url: '../../images/people01.jpg'},
    {title: '모카 라떼', url: '../../images/coffee02.jpg'},
]

// 1. list에 목록
const list = document.getElementById('list')
console.log(list)


for(let i = 0; i < data.length; i++){
    list.innerHTML += `<li class="button">${data[i].title}</li>`
    console.log(data[i])
}
const buttons = document.querySelectorAll(".button")
const images = document.getElementById('image')
const title = document.getElementById('title')

for(let j = 0; j< buttons.length; j++){
    buttons[j].addEventListener("click", () => {
        // 이미지 속성을 바꾸는 명령 (image.src = 값)
        image.src = `${data[j].url}`
        title.innerText = `${data[j].title}`;
    })
}