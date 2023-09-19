// switch.js
// console.log('switch문')

let food = '볶음밥'
// 비교연산자는 쓸 수 없으며 break를 통하여 맞는 조건을 찾는다. 값이 없을때는 "default"값이 출력됨
switch(food){
    case "짬뽕":
        console.log('오늘 점심은 짬뽕');
        break;
    case "볶음밥":
        console.log('맛있겠네요')
        break;
    default:
        console.log('오늘 점심은 굶습니다.')
        break;
    
}