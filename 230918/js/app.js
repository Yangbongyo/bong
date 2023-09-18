console.log('app');

// const text = document.querySelector('#title');
const size = 60;
const text = document.getElementById("title");
console.log(text);
text.style.color = 'red';
text.style.fontSize = `${size}px`;
text.textContent = '바뀐 내용입니다'
text.innerHTML = '<span>...</span>'

// graph 라는 아이디를 통하여 element요소를 가져옴
const graph = document.getElementById('graph');
// graph 요소에서 data-value 값을 가져옴
const graphValue = graph.dataset.value;
console.log(graph, graphValue);

// graph.innerHTML = '<span>그래프</span>' ;
graph.textContent = `${graphValue}%`;
graph.style.color = 'white';
graph.style.fontSize = '22px';
graph.style.textAlign = 'center';
// graph 요소의 폭을 graphValue만큼 조정
graph.style.width = graphValue + '%';






// let number1 = prompt('숫자를 입력하세요');
// let number2 = prompt('숫자를 입력하세요');
// number = parseInt(number1) + parseInt(number2);

// if(number !== null){
//     // number = parseInt(number);
//     (number % 2 === 0) ? alert(`${number} : 짝수`) : alert(`${number} : 홀수`);
// }



