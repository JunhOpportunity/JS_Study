// HTML 속성
const tttt = document.querySelector('#tttt');

// getAttribute('속성') : 속성에 접근하기
console.log(tttt.getAttribute('href')); // href에 해당하는 값 출력
console.log(tttt.getAttribute('id')); // id에 해당하는 값 출력

// setAttribute('속성', '값') : 속성 추가하기
tttt.setAttribute('class', 'addclass'); // class="addclass" 추가하기

// removeAttribute('속성') : 속성 제거하기
tttt.removeAttribute('id'); // tttt의 id 속성 제거하기

// Topic1 - CH2 - 16부터 START.