const myTag = document.querySelector('#title-1');

// innerHTML 노드 내부의 HTML 코드를 문자열로 리턴해준다.
myTag.innerHTML += '<li>EXOTIC</li>'; // JS에서 HTML에 코드를 추가할 수 있다.

// textContext (주의 - 텍스트만 다루기 때문에 특수문자나 태그 역시 문자로 다룸.)
console.log(myTag.textContent); // 태그 부분은 제외하고 text만 리턴한다.

// outerHTML 노드 전체를 HTML로 리턴한다. 
// outerHTML은 새로운 값을 할당할 경우 요소 자체가 교체되어 버리기 때문에 주의해야 합니다. (????)
console.log(myTag.outerHTML)

// Topic1 - CH2 - 11부터 START.


