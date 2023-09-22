// accordion Menu

const listItem = document.querySelectorAll(".list-item")
const icon = document.querySelectorAll(".icon")

/*
for(let i = 0; i < listItem.length; i++) {
    listItem[i].classList.remove('selected')
    listItem[i].addEventListener("click", () => {
        for(let i = 0; i < listItem.length; i++){
            listItem[i].classList.remove('selected')
        }
        listItem[i].classList.add('selected')
        // for(let i = 0; i < icon.length; i++){   css에서 속성 적용
        //     icon[i].classList.remove('icon')
        // }
        // icon[i].classList.add('icon')
    })
}
*/

// 위 방법을 forEach 방식으로 변경한 형태 (기존 i의 선언부를 대체하는 기능)
// item = 임의의 변수명
// remove/add 를 toggle방식으로 변경
listItem.forEach(item => {
    item.classList.remove('selected')
    item.addEventListener("click", () => {
        listItem.forEach(item => {
            item.classList.remove('selected')
        })
        item.classList.add('selected')
    })
})