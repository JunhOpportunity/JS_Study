console.log(document); // dom을 object형태로 출력
console.dir(document); // dom을 객체 형태로 출력. 이게 더 뭔가 찾기 편함.

// Tree & Node
// 요소 노드 : element node (tag를 표현 하는 것들)
const flagNode = document.querySelector("#tttt");
console.log(flagNode);

// 부모 노드 : parent node
console.log("부모 노드");
console.log(flagNode.parentElement); // 부모 노드 출력


// 자식 노드 : childe node
console.log("자식 노드");
console.log(flagNode.firstElementChild); // 첫 번째 자식 출력
console.log(flagNode.lastElementChild); // 마지막번째 자식 출력

// 형제 노드 : sibling node
console.log("형제 노드");
console.log(flagNode.previousElementSibling); // 바로 이저 형제 출력 (없으니까 null 출력됨)
console.log(flagNode.nextElementSibling); // 바로 다음 형제 출력 (script 출력 됨.)




