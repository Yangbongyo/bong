// side bar

const trigger = document.querySelector("#trigger")
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

trigger.addEventListener("click", () => {
if (sidebar.classList.contains('open') === false) {   // sidebar.classList.toggle('open')
        sidebar.classList.add('open')
        trigger.textContent = '닫기'
        overlay.classList.add('open')       
}else{
    sidebar.classList.remove('open')
    trigger.textContent = '열기'
    overlay.classList.remove('open')
}
})
// trigger.addEventListener("click", () => {
//     sidebar.classList.toggle('open') 
//     overlay.classList.toggle('open')

overlay.addEventListener("click", () => {
    if(overlay.classList.contains('open')){
    sidebar.classList.remove('open')
    overlay.classList.remove('open')
    trigger.textContent = '열기'
    }
})
