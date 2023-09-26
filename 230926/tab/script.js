console.log('test')

const tabList = document.querySelector('.tab-list')
const tabButton = document.querySelectorAll('.tab-button')
const selected = document.querySelector('.selected')

const tabItem = document.querySelectorAll('.tab-item')
const show = document.querySelector('.show')

/*
for(let i = 0; i < tabButton.length; i++){
    tabButton[i].classList.remove('selected')
    tabButton[i].addEventListener("click", () => {
        for(let j = 0; j < tabButton.length; j++){
            tabButton[j].classList.remove('selected')
            tabItem[j].classList.remove('show')
        }
        tabButton[i].classList.add('selected') 
        tabItem[i].classList.add('show')
         
    })  
}
*/

tabButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButton.forEach((item, idx) => {
	// button -> item이 됨(??)
            button.classList.remove('selected')   // 자식요소는 index명을 부여하지 않아도 인지해서 적용됨
            tabItem[idx].classList.remove('show')  // 외부 속성이므로 index명을 명확히 지정해 주어야 한다
        })
        button.classList.add('selected')
        tabItem[idx].classList.add('show')
    })
})