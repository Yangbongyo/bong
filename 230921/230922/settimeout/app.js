// settimeout

const title = document.getElementById('title')
console.log(title.textContent)

// title.textContent 내용을 배열로 변환
// sprit('') - ''안의 속성에 따라서 문자를 배열로 쪼개는 메소드
const textArray = title.textContent.split('')

title.textContent = ''

for(let i = 0; i < textArray.length; i++){
    setTimeout(() => {
        title.textContent += textArray[i];
    }, 500 * i)
}


// createElement('태그') - 태그를 생성하는 메소드
const p = document.createElement('p')
document.body.append(p)
p.textContent = title.textContent
