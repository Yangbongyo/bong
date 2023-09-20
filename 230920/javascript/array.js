// arrey.js

const number = [1,2,3]
const animal = ['고양이', '강아지','코끼리']

// number 배열의 길이를 출력
console.log(number.length)

// 객체, object
const classRoom = {
    number : '202',
    students : '20',
    aircon : true,
    computer : true,
    pokamon : ['피카츄', '꼬부기'],
    func : () => {
        console.log('함수도 담을수...')
    }
}
classRoom.number = '300'
console.log(classRoom.number)
console.log(classRoom.students)  // 표현법 (classRoom["students"])
console.log(classRoom.pokamon[0])
classRoom.func()      // 함수를 불러오는 방법


// 점심메뉴
const lunch = [
    {
        name : '짜장면',
        cost : 7000
    },
    {
        name : '짬뽕',
        cost : 8000
    },
    {
        name : '김밥',
        cost : 3500
    },
    {
        name : '콩나물국밥',
        cost : 6000
    }
]
/*
console.log(lunch[0])
console.log(lunch[0].name)   // (lunch[0]["name"])
console.log(lunch[3]["cost"])
*/

/*
// for - 반복문
for(초기화; 조건; 증가/감소){
    // 반복해서 해야할 일
}
*/

const list = document.querySelector("#list");

let totalCost = 0;
for(let i = 0; i < lunch.length; i++){
    // console.log(i)
    // console.log(lunch[i])
    // 각 메뉴 이름 출력
    // console.log(lunch[i].name);
    // 각 메뉴의 금액
    // console.log(lunch[i].cost);
    // 짜장면의 가격은 7000원입니다
    // lunch의 가격 합
    totalCost += lunch[i].cost
    // list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`
    document.body.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>` 
    console.log(`${lunch[i].name}의 가격은 ${lunch[i].cost.toLocaleString('ko-kr')}원 입니다`)
}

console.log(`전 메뉴의 단가를 모두 합한 금액은 ${totalCost.toLocaleString('ko-kr')}원 입니다`)
    
