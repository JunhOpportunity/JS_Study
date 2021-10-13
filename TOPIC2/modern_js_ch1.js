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





