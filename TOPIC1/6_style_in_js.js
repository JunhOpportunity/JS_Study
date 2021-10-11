const list = document.querySelector('#tlist');

console.log(list.children[1]);
// classList.toggle() : 없으면 추가, 있으면 삭제  
list.children[1].classList.toggle('done'); // 이 코드도 안되는 문제가 발생하였었음.
/*
    왜 안되었느냐? 코드는 알다시피 위에서부터 아래로 내려오면서 디버깅 한다.
    그런데 index.html에서 내가 현재 js페이지 외에 다른 js 문서들도 script 해두었기때문에
    다른 js 문서에서 영향을 받았다.
    거기까진 문제가 없었으나, 5_... js 문서에서 adclass를 추가하고 id를 제거하게 했기때문에
    현재 코드가 적용되는 시점에서는 tlist라는 id가 사라진 상태이다.
    따라서 querySelector('#tlist')를 인식하지 못했고
    이 경우에 나는 바로 알아채지 못했지만 고심 끝에
    consol.log()를 이용해 지금 내가 가져온 list의 코드를 출력했으나
    null 값이 나왔다. 따라서 이때 문제점을 파악하고
    F12를 눌러서 코드를 확인한 결과 id는 삭제되고 adclass라는 클래스가 추가되어있었다.
    그래서 현재 코드 문서를 제외한 나머지 코드 문서들의 script를 주석화 했다.
    그 결과 정상적으로 작동 되었다.
*/

//+) classList.toggle('done', flase) : remove 기능만
//+) classList.toggle('done', true) : add 기능만

// CSS 에서 사용하던 스타일 코드들은 카멜 법칙으로 써야함.
// ex) TextDcoration