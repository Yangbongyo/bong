// 요소 노드 만들기 - createElement() 메서드
let newImg = document.createElement("img")

// 속성 노드 만들기 - createAttribute() 메서드
// document.createAttribute(속성명)
// 노드명.value = 속성값;

document.createAttribute("src");
srcNode.value = "images/img.jpg";

// 속성 노드 연결하기 - setAttributeNode() 메서드
노드명.setAttributeNode(srcNode)   //속성노드