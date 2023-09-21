
const menuItem = document.querySelectorAll(".menu-item")
console.log(menuItem)


// 변수의 스코프(scope, 범위, 영역)
// 변수 "i"의 중복 선언이 가능한 이유 --- 스코프가 다르다
// let 키워드로 선언된 변수의 scope는 블록단위
// 첫번째 "i"는 11~17번줄의 scope / 두번째 "i"는 12~14번줄의 scope
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", () => {
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('active')
        }
        menuItem[i].classList.add('active')
    }) 
}

// 해당 위치에 클래스를 추가
/*
menuItem[menuItem.length - 1].addEventListener("click",() => {
    menuItem[4].classList.add('active')
})

// 해당 위치에 클래스를 삭제
menuItem[0].addEventListener("click", () => {
    menuItem[0].classList.remove('active')
})
*/
