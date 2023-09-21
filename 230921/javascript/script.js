// 이미지 슬라이딩

const show = document.querySelector(".show")
const image = document.querySelectorAll(".image")

for(let i = 0; i < image.length; i++){
image[i].addEventListener("click", () => {
    for(let i = 0; i < image.length; i++){
        
        image[i].classList.remove('show')
        console.log(image)
    }  
    image[i].classList.add('show')
})
}