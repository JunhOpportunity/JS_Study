// 키보드 이벤트

KeyboardEvent.type /*
o keydown : 키보드 버튼을 누른 순간
o keypress : 키보드 버튼을 누른 순간
o keyup : 키보드 버튼을 눌렀다 뗀 순간

[keydown과 keypress의 차이점]
1.  keypress는 알파벳, 숫자와, 특수기호처럼 직접 입력되는 키에 대해서만 반응.
    Shift, ESC 같은 직접적으로 입력되지 않는 키에는 반응 X

2.  하나의 키를 계속 누르고 있는 경우 keydown은 계속 반응하지만
    keypress는 최초에 한 번만 반응

3.  keypress는 영어를 제외한 다른 언어를 입력할 경우 반응 X


*/

// input,  스크롤 다시 해야할듯.