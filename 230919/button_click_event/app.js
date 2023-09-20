// app.js

const friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', "짱아"]
// console.log(friends)

// 친구들은 총 몇명인가요 - 배열의 길이
console.log(`친구들은 총 ${friends.length}명 입니다`)

// 흰둥이를 출력해주세요
console.log(friends[1])

// 짱아를 배열에서 빼주세요
friends.pop()
console.log(friends)

// 짱아를 추가
friends.push("짱아")
console.log(friends)

for(let i = 0; i < friends.length; i++){
    console.log(`${friends[i]}는 ${i}번째`)

}

const add = (x) => {
    return console.log(x * 2)
}

const numbers = [1, 2, 3, 4, 5]
for(i = o; i < numbers.length; i++){
    add(numbers[i])  
}
    