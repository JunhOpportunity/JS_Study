// 21.10.06 JS 중급 START

// id로 태그 선택하기 - getElementById('아이디')
document.getElementById(); // id 속성을 통해 어떠한 요소를 가져오겠다.
// 참고로 존재하지 않는 id이면 null값 나온다.


// class로 태그 선택하기 - getElementByClassName('클래스')
document.getElementsByClassName(); // 여러개를 가져온다.
// 존재하지 않는 class 이면 undefine값 나온다.


// CSS 선택자로 태그 선택하기 - querySelector('.클래스 또는 #아이디)
document.querySelector('.className');   // 한 개 가져옴
document.querySelector('#id');          // 한 개 가져옴
document.querySelectorAll('.class');    // 모두 가져옴
document.querySelectorAll('#id');       // 모두 가져옴
// 존재하지 않는 요소를 선택하게 되면 null값 나온다.

// EVENT
// CLICK EVENT
// 아래 부분은 수업 내용과 다름. 내가 NOMAD 사이트에서 배운 것. (addaddEventListener)
function clicked() {
    console.log("clicked!");
}

const btn = document.querySelector('#myBtn');
btn.addEventListener("click", clicked);



