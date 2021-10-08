// 21.10.07
const todoClass = document.querySelector('.today');

// 요소 노드 추가하기
// 1. 요소 노드 만들기 : document.createElement('태그이름')
const addLi = document.createElement('li');

// 2. 요소 노드 추가하기 : textContent, innerHTML, ...
addLi.textContent = '처음';

// 3. 요소 노드 추가하기 : prepend, append, after, before
// todoClass.append(addLi); // 여기서 안됨. 왜지?

// const toDoList = document.querySelector('');

// const add = document.createElement('li');
// add.textContent = text;
// toDoList.append(add);


/////////////////////////////////////////////////////////////////////////
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
// 노드 이동
// today의 0번 자식 인덱스의 값을 tomorrow로 가져옴.(맨 아래로 옮김)
tomorrow.append(today.children[0]); 

// 원하는 위치로 이동 
tomorrow.children[1].after(today.children[1]) // tomorrow 두 번째 자식노드 아래로 이동.
tomorrow.children[0].before(today.children[0]) // tomorrow 첫 번째 자식노드 위로 이동.
