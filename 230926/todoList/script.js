// input에 입력하면 li 생성되어 항목이 출력
// input에 Enter했을때 빈 정보 출력됨 - 경고창 출력
// 출력 내용을 클릭하면 선택되는 정보 확인 (target / currenttarget)
// 삭제 버튼 클릭시 부모요소 삭제 기능

console.log('test')

const input = document.querySelector("#add-todo")
const addButton = document.querySelector(".add-button")
const list = document.querySelector("#list")
// const listDelete = document.querySelector("'list-delete")

// event 활용하여 keydown의 속성을 확인한 후 enter내용을 확인
// 아래의 내용을 if문으로 작성시 하단 함수로 변경 처리한다
input.addEventListener('keydown', (e) => {
    // enter 키를 누르면 addEventListene() 함수 실행
    if(e.key === 'Enter'){
        addListItem()
    }
})
addButton.addEventListener("click", () => {
   addListItem()
})
// list에 할 일을 추가하는 함수
const addListItem = () => {
    // 빈 Enter를 누를 경우 경고창 생성
    if(input.value.length === 0){
        return alert('내용을 입력해주세요')
    }
    const listItem = document.createElement('li')
    // document.createElement('button')
    // console.log(input.value)
    listItem.innerHTML = `${input.value} <button class='list-delete'>&#x2716</button>`
    listItem.classList.add('list-item')
    // list에 li 요소 추가
    list.append(listItem)
    // 추가하면 내용이 비워지는 내용
    input.value = '';
    // 추가한후 input에 자동 focus
    input.focus();
    // localstorage에 저장하는 형태
    saveList(list.innerHTML)
}
list.addEventListener("click", (e) => {
    console.log(e.currentTarget)

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        // 출력 요소를 클릭하면 회색을 보여지고 새로고침하면 원래 돌아감
        saveList(list.innerHTML)
    }
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        // 버튼으로 삭제하였을때 새로고침하면 재생되는 경우를 막는 내용
        saveList(list.innerHTML)
    }
})

// currentTarget  : 이벤트가 걸려있는 해당요소
// target : 클릭하는 요소

const saveList = (list) => {
    // localStorage.setItem('todo', list)
    localStorage.setItem('todo', JSON.stringify(list))
}
// 불러오는 형태
// const loadList = () => {
//     list.innerHTML = localStorage.getItem('todo')
// }
const loadList = () => {
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}
// DOMContentLoaded : DOM이 그려지고 난 뒤
// load : DOM도 그려지고, 이미지와 같은 요소들도 모두 로드 되었을때
document.addEventListener('DOMContentLoaded', loadList())