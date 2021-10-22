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