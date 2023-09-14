/*
const photo = document.querySelector("#photo img");
 const box = document.querySelector("#box");   
const box = document.querySelector("#box");

photo.onclick = function(){
    photo.src = "images/moon_2.jpg";
}
*/
/* box.onclick = () => box.style.backgroundColor = "red";
box.onclick = () => box.style.opacity = "50%";  */

// 스타일 추가 - 클릭 한번만 가능
// box.onclick = () => box.classList.add("ope");  

// 스타일 추가 - remove 기능으로 클릭할때마다 리턴
// box.onclick = () => {
//     if(!box.classList.contains("check")){
//         box.classList.add("check");
//     }else{
//         box.classList.remove("check");
//     }
// }

const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
    alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});