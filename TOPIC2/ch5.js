// fotEach 구문 
// : for 반복문에서 let a of list 와 비슷함.
// forEach 구문에서의 파라미터는 첫 번째는 변수 이름, 두 번째는 인덱스
// 주의) 반복 횟수는 무조건 처음 리스트의 개수 만큼만 됨.
//      중간에 리스트에 값을 계속 추가해도 처음 리스트의 개수 만큼만 반복.
//      그런데, 만약에 중간에 리스트의 값을 삭제한다면, 반복 횟수는 줄어듬.
const firstNames = ['예니', '민영', '호이', '슬기'];
const lastNames = ['우', '박', '준', '강'];

firstNames.forEach((firstName, index) => {
    console.log(`${index}번째 ${lastNames[index]} ${firstName} 님이 입장하셨습니다.`)
});

// map 구문
// forEach 에서 forEach만 map로 바꾸어 주면 됨.
// forEach 와의 차이점은, map 에서는 값을 반환 해 준다는 것이다.
// 따라서, 반복문 앞에 변수를 지정해 주면, 그 변수에 값을 리턴해 줄 수 있다.
// forEach 구문에서는 그게 불가능하다.



// filter
// filter을 이용해 새로운 배열을 만들 수 있음. -> 하나만 필터링해도 배열로 출력됨. 이래서 해결 방안 = find
// 객체들을 묶은 배열 만들었음.

const devices = [
    {name: 'S20', brand: 'samsung'},
    {name: 'mac', brand: 'apple'},
];

// 요소의 프로퍼티가 apple 인 것만 리턴
const apples_filter = devices.filter((el) => el.brand === 'apple');

console.log(apples_filter);

// find
// filter 은 배열로 리턴하지만, find 는 값으로 리턴함.
// 그런데, find 는 하나만 찾고 바로 종료됨.
const apples_find = devices.find((el) => el.brand === 'apple');

console.log(apples_find);