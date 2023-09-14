const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];
container.style.backgroundImage = `url(images/${pics[0]})`;

let i = 0;
arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left") {
        i--;
        if(i < 0) {
         i = pics.length - 1;
        }
    }
        else if (e.target.id == "right") {  // 오른쪽 화살표 클릭?
            i++;  // 다음 이미지로 이동
            if ( i >= pics.length ) {  // 마지막 이미지?
              i = 0;  // 첫번째 이미지로 이동
            }
          }
          container.style.backgroundImage = `url(images/${pics[i]})`;  // 현재 이미지 표시
    });
});
