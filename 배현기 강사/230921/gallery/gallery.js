const data = [
    {title: '진돗개', url: 'image/1.jpg'},
    {title: '시츄', url: 'image/2.webp'},
    {title: '치와와', url: 'image/3.webp'},
    {title: '사모예드', url: 'image/4.webp'},
    {title: '웰시고기', url: 'image/5.webp'},
    {title: '래브라도리트리버', url: 'image/6.jpg'},
    {title: '아기 웰시고기', url: 'image/7.jpg'},
    {title: '닥순이', url: 'image/8.jpg'}
]

// 1. list에 목록 
const list = document.getElementById('list')
console.log(list)

for(let i = 0; i < data.length; i++){
    // 반복해서 li 요소에 title 값을 담아줌
    list.innerHTML += `<li class="button">${data[i].title}</li>`
}

// .button 클래스를 가진 요소들을 모두 가져옴
const buttons = document.querySelectorAll('.button')
const image = document.getElementById('image')
const title = document.getElementById('title')

for(let i = 0; i < buttons.length; i++){
    // 초기화
    // 첫번째 버튼에 check 클래스 추가
    buttons[0].classList.add('check')
    // 첫번째 데이터 타이틀을 figcaption에 할당
    title.textContent = data[0].title

    // console.log(buttons[i])
    // i번째 버튼을 클릭하면
    buttons[i].addEventListener('click',() => {
        // i번째 데이터의 url 출력
        console.log(data[i].url)
        // 이미지 태그의 src 속성에 data[i].url 값 할당
        image.src = data[i].url
        // title의 값에 data[i].title
        title.textContent = data[i].title;

        // 모든 버튼에서 check 클래스 제거
        for(let j = 0; j < buttons.length; j++ ){
            buttons[j].classList.remove('check')
        }
        // 클릭한 버튼에 check 클래스 추가
        buttons[i].classList.add('check')
    })
}

