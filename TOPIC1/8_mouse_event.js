// 21.10.10
// 마우스 이벤트

// 사용 방법 :
addEventListener('click', funct);

/////////////////////마우스 버튼 이벤트/////////////////////
MouseEvent.button
// 0 : 마우스 왼쪽 버튼
//  1 : 마우스 휠
//  2 : 마우스 오른쪽 버튼


MouseEvent.type
// click : 마우스 왼쪽 버튼을 눌렀을 때
// contextmenu : 마우스 오른쪽 버튼을 눌렀을 때
// dblclick : 동일한 위치에서 빠르게 두 번 click 할 때 주의**)db'l'click 이다!!!!!!!!!!!!!!!!!!!!!!!!!
// mousedown : 마우스 버튼을 누른 순간
// mouseup : 마우스 버튼을 눌렀다가 뗀 순간



/////////////////////마우스 이동 이벤트/////////////////////
MouseEvent.moveEvent
// mousemove : 마우스 포인터가 이동할 때
// mouseover : 마우스 포인터가 요소 밖에서 안으로 들어올 때
// mouseout : 마우스 포인터가 요소 안에서 밖으로 나갈 때

// clientX, clientY : 화면에 표시되는 창 기준 마우스 포인터의 위치 (화면에 보이는 좌측 상단 모서리 기준 (0,0))
// pageX, pageY : 웹 문서 전체 기준 마우스 포인터의 위치 (전체 문서 내에서 마우스의 위치)
// offsetX, offsetY : 이벤트가 발생한 요소 기준 마우스 포인터 위치 (이벤트가 발생한 target 내에서 마우스의 위치 / 항상 대상의 좌측 상단 모서리 기준)
// 사용 방법 :
function onMouseMove(event) {
    console.log(`client: {${event.clientX}}`);
}

// mouseenter mouseleave 와 mouseover mouseout의 차이
// 자식 요소의 영역 계산 x  |
// 버블링이 일어나지 않음   |
// 

