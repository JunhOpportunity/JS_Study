const tttt = document.querySelector('#tttt');

// classList.toggle() : 없으면 추가, 있으면 삭제  
tttt.children[1].classList.toggle('done');
//+) classList.toggle('done', flase) : remove 기능만
//+) classList.toggle('done', true) : add 기능만

// CSS 에서 사용하던 스타일 코드들은 카멜 법칙으로 써야함.
// ex) TextDcoration