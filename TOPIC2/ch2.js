//==============================================================//
// 데이터 타입
const num = Number(1);
const str = String("hello")
const bool = Boolean(true)
const object = Object();
const sym = Symbol();
const bigi = BigInt();

/*
    Symbol값은 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수.
    같은 문자를 비교해도 Symbol값이라면 무조건 false가 반환된다.
    const symbolA = Symbol('this is Symbol');
    const symbolB = Symbol('this is Symbol');
    symbolA === symbolB => false
*/

//==============================================================//
// 불린에서 Falsy 값과 Truthy 값
Boolean(flase);
Boolean(null);
Boolean(undefined);

/*
    Falsy 값 : Boolean에서 false가 반환되는 것들.
    false, null, undefined, NaN, 0, ''(빈 값)

    Truthy 값 : Boolean에서 true가 반환되는 것들.
    Falsy값 외에 나머지
*/

// +) 문자열을 숫자로 형 변환했을 때 NaN 값이 된다.



//==============================================================//
// && 와 ||의 연산 방식
// && 의 경우 왼쪽이 true 인 경우 오른쪽 출력
console.log('charm' && 'js');   // js 출력
console.log(false && 'js');     // false 출력
// || 의 경우 왼쪽이 true 인 경우 왼쪽 출력
console.log(true || 'js');      // true 출력
console.log(false || 'js');     // js 출력

// 삼항 연산자 처럼 논리 연산으로 사용할 수도 있음.
const message = value || 'Codeit';

// && 와 || 중에 &&가 우선순위 더 높음



//==============================================================//
// ?? : 병합 연산자  
/* 
    왼쪽이 null 이나 undefined 라면 오른쪽이 리턴.
    주의) 왼쪽이 false라면 그냥 왼쪽 리턴됨. 무조건 null 또는 undefined
*/
console.log(false ?? 'js'); // false 출력
console.log(null ?? 'js'); // js 출력
console.log(undefined ?? 'js'); // js 출력




//==============================================================//
// let, const, var 다시 (Topic-CH1-11.변수와 스코프)
/*
let, const 같은 경우 중괄호 안에서 선언한다면 지역 변수로 되기때문에 밖에서는 사용 불가


*/