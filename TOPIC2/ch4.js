// 자바스크립트의 다양한 문법과 표현

//==============================================================//
// 삼항 연산자
// 삼항 연산자는 표현식이기때문에 조건에 따라 변수 선언 불가능.
const CUT_OFF = 80;
function passFail(score) {
    return score > CUT_OFF ? "PASS" : "Fail";
};

console.log(passFail(75));

//==============================================================//


//==============================================================//
// Spread 구문
// 배열을 이용해 Spread 구문 사용 시 쉽게 값을 복사하거나 가져올 수있음.
// ...배열이름
// 그러나, 배열 안에 하나의 값만 들어있다고 해서 하나를 가지고 하나의 값이라고 이해해서는 안됨
// ex) const num = [1];  const n = ...num;  <-  오류 발생
const arr = [1, 2, 3, 4];
const arrCopy = [...arr];

console.log(arr); // => [1, 2, 3, 4] 출력 됨.
console.log(arrCopy); // => [1, 2, 3, 4] 출력 됨.
//==============================================================//


//==============================================================//
// 모던한 프로퍼티 표기법
const title = 'title';
const birth = 2001;
const job = 'student';

const user = {
    // title: title, 프로퍼티 네임 = 변수 이름 => 축소 가능
    // birth: birth,
    // job: job,
    title,
    birth,
    job,
};

// +) '프로퍼티 네임'을 '개선된 프로퍼티 네임' 이라는 방식으로 사용 가능.
const test = {
    ["ABC" + 'abc']: 'abctest',
    [job]: 'job',
};
//==============================================================//


//==============================================================//
// 옵셔널 체이닝 뭔지 모르겠음. ch4-09


//==============================================================//
// 구조 분해 - 배열
const rank = ['가', '나', '다', '라', '마'];

const mackbook = rank[0];
const ipad = rank[1];
const airpods = rank[2];
const coupon = rank[3];

// 위 코드들을 한 줄로 줄여서 각각 할당할 수 있음.
// 반드시 대입 연산자 오른쪽에 있는 것은 배열이어야함.
// 만약 배열의 값의 개수가 할당받을 변수들의 개수보다 적다면 undefind가 할당됨.
const [mackbook, ipad, airpods, coupon] = rank;

// 이렇게 작성하면 남아있는 것들 모두 할당 가능
const [mackbook, ipad, airpods, ...coupon] = rank;

// 교환도 가능함. temp 없이!!
let imack = 'son';
let pad = 'meenoi';

[imack, pad] = [pad, imack]
//=> 이제 imack에 meenoi, pad에 son 저장.
//==============================================================//


//==============================================================//
// 구조 분해 - 객체
const objectPractice = {
    time: '11:51',
    date: '21.10.19',
    temperture: '25',
}

const time = objectPractice.time;
const date = objectPractice.date;

// 프로퍼티 네임과 변수 이름이 같은 경우 이렇게 줄일 수 있음.
const {time, date} = objectPractice;

// 새로운 변수 이름을 저장할 수 있다.
// objectPractice 객체 속 temperture 프로퍼티를 tem 변수에 저장.
// 이 방법은 주로 객체 안에서 프로퍼티 네임이 '문자열'로 되어있는 경우에 매우 유용
const {temperture: tem} = objectPractice;
//==============================================================//


//==============================================================//
// 함수와 구조분해 ch.14 모르겠다.
//==============================================================//


//==============================================================//
// 에러와 에러 객체
// 에러
//   에러가 발생하는 순간 그 다음 코드부터는 실행이 안된다.
//   에러의 종류 
//      reference 에러(존재하지 않는 함수나 변수 사용시 발생)
//      type 에러(문자를 함수로 사용하는 경우)
//      syntax 에러(문법 오류시 발생 / Syntex 에러가 존재하는 경우 코드 실행 전에 Syntex 에러가 출력되고 모든 코드 실행 안됨.)
//      더 많은 에러 정보 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error
//   에러 발생 시 console에 에러 객체가 출력된다.

// 에러 객체
//   에러 객체는 name: message 로 구성된다.

// 에러 객체를 만들고 에러를 발생시키는 방법
//   에러 객체 생성
const error = new TypeError('에러 발생! 에러 발생! emergency!');
//   에러 발생
throw error;


