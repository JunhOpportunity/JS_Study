// event handler - addEventListener('event 종류', 함수)

// 마우스 이벤트
// mousedown	마우스 버튼을 누르는 순간
// mouseup	마우스 버튼을 눌렀다 떼는 순간
// click	왼쪽 버튼을 클릭한 순간
// dblclick	왼쪽 버튼을 빠르게 두 번 클릭한 순간
// contextmenu	오른쪽 버튼을 클릭한 순간
// mousemove	마우스를 움직이는 순간
// mouseover	마우스 포인터가 요소 위로 올라온 순간
// mouseout	마우스 포인터가 요소에서 벗어나는 순간
// mouseenter	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
// mouseleave	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

// 키보드 이벤트
// keydown	키보드의 버튼을 누르는 순간
// keypress	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
// keyup	키보드의 버튼을 눌렀다 떼는 순간

// 입력 이벤트
// change	입력된 값이 바뀌는 순간
// input	값이 입력되는 순간
// select	입력 양식의 하나가 선택되는 순간
// submit	폼을 전송하는 순간

// 윈도우 창 크기 변경 이벤트
// resize 윈도우 사이즈를 움직일 때 발생

// 포커스 이벤트 (?)
// focusin	요소에 포커스가 되는 순간
// focusout	요소로부터 포커스가 빠져나가는 순간
// focus	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
// blur	요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)


// 21.10.10
// 이벤트 버블링
// 자식 요소의 이벤트가 실행되었을 때 부모 요소의 이벤트도 함께 실행되는 것.
// event.stopPropagation(); 으로 버블링 없을 수 있음 그러나
// 버블링을 없애는 경우 그 위치 자체가 부모요소에서 사라지기 때문에
// 가급적 없애지 않는게 좋음.

// 이벤트 위임 : 부모 노드에 이벤트 핸들러 하나만 해줘도 자식 노드 모두에서 적용 가능.
// 따라서, 자식 노드를 추가한 경우에 따로 이벤트 핸들러를 적용할 필요 없게됨. (버블링)
const list = document.querySelector("#tlist");

function underline(event) {
    // 그러나 사용자가 원하는 자식 노드 이외의 바깥 클릭시에도 반응하므로 문제발생. 
    // 따라서 if문을 사용해서 자식노드들에만 존재하는 클래스 확인 후 반응하도록
    if(event.target.classList.contains('title-1')) { // contains는 안에 있는지 없는지 불린값으로 반환
        event.target.classList.toggle('done');
    } 
    
}

list.addEventListener('click', underline);

// event.preventDefault() - 브라우저의 기본 동작 막기
// 예를들면 링크를 눌렀을 때 이동 불가하게 만든다거나 복사 불가하게 만든다거나 등등

// TOPIC1 - CH4 - 1부터

