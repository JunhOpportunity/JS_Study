// 함수 Function

//==============================================================//
// 기본적으로 우리가 아는 함수 선언
// 함수 선언은 호이스팅이 가능했다. (선언을 아래에다 해도 위에서 사용 가능)
// 함수 안에 선언된 함수는 전역함수로 사용 불가능
// 그러나 함수 안에서 말고 다른 코드 블럭에서 선언 시에는 전역함수로 사용 가능
function funcname(parameter) {
    pass;
};


//==============================================================//
// 함수를 변수에 할당 || 함수 선언을 값처럼 할당하는 것 = 함수 표현식
// 함수 표현식은 호이스팅이 불가능하다.
// 1
const funcvar = function() {
    pass;
};
funcvar();

// 2
const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    console.log("button is clicked!");
});


//==============================================================//
// let, const 차이를 잘모르겠다.
// const말고 let으로 함수 표현식 사용 시 블럭 형성으로 인해 함수 호출 불가능 하다는데,,


//==============================================================//
// 즉시 실행 함수 : 기존 함수 선언 겉에 괄호 씌워주고 그 뒤에 파라미터 추가
// 주의) 즉시 실행 할 때 한 번 만 사용할 수 있다
(function real_time_func () {
    console.log("It's real time function");
})();

// 즉시 실행 함수의 활용
(function init() {
    // 프로그램이 실행 될 때 기본적으로 동작할 코드
})();


//==============================================================//
// 콜백 함수 : 다른 함수의 파라미터에 전달된 함수
// 고차 함수 : 함수를 리턴하는 함수
function getPrintHi() {
    return function () {
        console.log("Hi!");
    };
};
const sayHi = getPrintHi();
sayHi();

getPrintHi()(); // 고차 함수는 이렇게 괄호 두 개를 사용해서 바로 사용 가능.


//==============================================================//
// Parameter
// null 값을 받을 경우 null 을 아규먼트로 사용함.
// undefined 의 경우에는 적지 않은 것과 같다.
function funcnama(parameter) {
    console.log('/');
}
functuibname('argument')

// 이런 파라미터도 있다.
function defaultTest(x, y = x + 3) {
    console.log(x, y);
}
defaultTest(2); // 두 번째 파라미터를 입력하지 않을 경우 연산해서 출력
defaultTest(2, 3); // 두 번째 파라미터를 입력할 경우 입력한 값 출력


